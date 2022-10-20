/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getTrainers } from '../../store/modules/trainers';
import { ROUTER_IDS } from '../../utils/routeConst';
import { baseURL } from '../../utils/axiosConfig';

import { FadeInDown } from '../styled/animation';
import Spinner from '../styled/spinner';
import {
  Container, TrainerCard, Avatar, CardContainer, SliderContainer, Text,
  DesktopView, MobileView,
} from './styled.trainers';

import { ReactComponent as LArrowIcon } from '../../assets/icons/left-arrow.svg';
import { ReactComponent as RArrowIcon } from '../../assets/icons/right-arrow.svg';
import { ReactComponent as Dot } from '../../assets/icons/dot.svg';
import './slider.css';

const SampleNextArrow = ({ className, style, onClick }) => (
  <RArrowIcon
    className={className}
    style={{
      ...style, width: 70, height: 70, zIndex: 10,
    }}
    onClick={onClick}
  />
);

const SamplePrevArrow = ({ className, style, onClick }) => (
  <LArrowIcon
    className={className}
    style={{
      ...style, width: 70, height: 70, zIndex: 10,
    }}
    onClick={onClick}
  />
);

export default function Trainers() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.trainers);

  useEffect(() => {
    dispatch(getTrainers());
  }, []);

  const settings = {
    customPaging: () => (<Dot />),
    dots: true,
    infinite: true,
    speed: 300,
    swipe: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: true,
  };

  return (
    <Element name={ROUTER_IDS.trainers}>
      <FadeInDown>
        <Container>
          <Text type="header" bold="bold">{t('trainers.header')}</Text>
          <SliderContainer>
            {loading
              ? <Spinner />
              : (
                <>
                  <DesktopView>
                    <Slider {...settings}>
                      {data.map((el) => (
                        <CardContainer key={el._id}>
                          <TrainerCard border shadow>
                            <Avatar url={`${baseURL}/../..${el.avatar}`} />
                            <Text type="name" bold="bold">{el.name}</Text>
                            <Text mb={20}>{el.profession}</Text>
                            <Text>{el.description}</Text>
                          </TrainerCard>
                        </CardContainer>
                      ))}
                    </Slider>
                  </DesktopView>
                  <MobileView>
                    {data.map((el) => (
                      <CardContainer key={el._id}>
                        <TrainerCard border shadow>
                          <Avatar url={`${baseURL}/../..${el.avatar}`} />
                          <Text type="name" bold="bold">{el.name}</Text>
                          <Text mb={20}>{el.profession}</Text>
                          <Text>{el.description}</Text>
                        </TrainerCard>
                      </CardContainer>
                    ))}
                  </MobileView>
                </>
              )}
          </SliderContainer>
        </Container>
      </FadeInDown>
    </Element>
  );
}
