/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setScrollId } from '../../store/modules/scrollId';
import useScrollPos from '../../hooks/window/useScrollPos';
import Logo from '../styled/logo';
import { ROUTER_IDS, ROUTER_PATHS } from '../../utils/routeConst';
import {
  Container, Nav, StyledLink, StyledLinkToId, Lang, Option, DropDown, DropDownIcon,
} from './styled.header';

export default function Header() {
  const dispatch = useDispatch();
  const scrollPos = useScrollPos();
  const { pathname } = useLocation();
  const { i18n, t } = useTranslation();
  const [isHomePage, setIsHomepage] = useState();
  const [language, setLanguage] = useState('en');
  const [openDropDown, setOpenDropDown] = useState(false);
  const [isOpenedMenu, setIsOpenedMenu] = useState(false);
  const [hide, setHide] = useState(false);
  const [isRemoveFromDom, setIsRemoveFromDom] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(scrollPos);

  useEffect(() => {
    if (!isOpenedMenu) {
      const isDownScroll = prevScrollPos < scrollPos;
      setHide(isDownScroll);
      setPrevScrollPos(scrollPos);
      if (isDownScroll) {
        setTimeout(() => setIsRemoveFromDom(true), 200);
      } else {
        setIsRemoveFromDom(false);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPos]);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    setIsHomepage(pathname === '/');
  }, [pathname]);

  const handleClickToLink = (scrollId) => {
    dispatch(setScrollId(scrollId));
  };

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const handleDropDownOpen = () => {
    setOpenDropDown(!openDropDown);
    if (isOpenedMenu) {
      setTimeout(() => setIsOpenedMenu(false), 500);
    } else {
      setIsOpenedMenu(true);
    }
  };

  const navLinks = [
    {
      id: 0,
      link: { to: ROUTER_PATHS.home, border: 'border' },
      linkToId: {
        border: 'border', to: ROUTER_IDS.join, spy: true, smooth: true, duration: 500,
      },
      child: t('header.join'),
    },
    {
      id: 1,
      link: { to: ROUTER_PATHS.home },
      linkToId: {
        to: ROUTER_IDS.courses, spy: true, smooth: true, duration: 500,
      },
      child: t('header.courses'),
    },
    {
      id: 2,
      link: { to: ROUTER_PATHS.home },
      linkToId: {
        to: ROUTER_IDS.home, spy: true, smooth: true, duration: 500,
      },
      child: t('header.home'),
    },
    {
      id: 3,
      link: { to: ROUTER_PATHS.home },
      linkToId: {
        to: ROUTER_IDS.about, spy: true, smooth: true, duration: 500,
      },
      child: t('header.about'),
    },
    {
      id: 4,
      link: { to: ROUTER_PATHS.home },
      linkToId: {
        to: ROUTER_IDS.trainers, spy: true, smooth: true, duration: 500,
      },
      child: t('header.trainers'),
    },
    {
      id: 5,
      link: { to: ROUTER_PATHS.home },
      linkToId: {
        to: ROUTER_IDS.contact, spy: true, smooth: true, duration: 500,
      },
      child: t('header.contact'),
    },
  ];

  return (
    <Container hidden={scrollPos >= 600} hide={hide} isRemoveFromDom={isRemoveFromDom}>
      {isHomePage
        ? (
          <StyledLinkToId
            to={ROUTER_IDS.home}
            spy
            smooth
            duration={500}
            onClick={() => openDropDown && handleDropDownOpen()}
          >
            <Logo />
          </StyledLinkToId>
        ) : (
          <StyledLink
            to={ROUTER_PATHS.home}
            onClick={() => openDropDown && handleDropDownOpen()}
          >
            <Logo />
          </StyledLink>
        )}
      <DropDown
        onClick={handleDropDownOpen}
      >
        <DropDownIcon open={openDropDown} />
      </DropDown>
      <Nav openDropDown={openDropDown} isOpened={isOpenedMenu}>
        {navLinks.map((navLink) => (
          isHomePage
            ? (
              <StyledLinkToId
                key={navLink.id}
                {...navLink.linkToId}
                onClick={handleDropDownOpen}
              >
                {navLink.child}
              </StyledLinkToId>
            ) : (
              <StyledLink
                key={navLink.id}
                {...navLink.link}
                onClick={() => {
                  handleClickToLink(navLink.linkToId.to);
                  if (openDropDown) handleDropDownOpen();
                }}
              >
                {navLink.child}
              </StyledLink>
            )
        ))}
        <Lang
          value={language}
          onChange={handleChangeLanguage}
        >
          <Option value="en">En</Option>
          <Option value="am">Am</Option>
        </Lang>
      </Nav>
    </Container>
  );
}
