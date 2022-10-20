import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ROUTER_PATHS, ROUTER_IDS } from '../../utils/routeConst';
import {
  Container, Row, Col, Paragraph, Image, DirectionsText,
  Button, LinkToId, ButtonContainer, Bg,
} from './styled.banner';
import { FadeInDown } from '../styled/animation';

import certificationImg from '../../assets/images/certification.png';
import uiuxImg from '../../assets/images/uiux.png';
import pmImg from '../../assets/images/pm.png';
import webImg from '../../assets/images/web.png';
import smmImg from '../../assets/images/smm.png';

const buttons = [
  { id: 1, name: 'UX / UI Design', image: uiuxImg },
  { id: 2, name: 'Project Management', image: pmImg },
  { id: 3, name: 'Web Development', image: webImg },
  { id: 4, name: 'SMM Marketing', image: smmImg },
];

export default function Banner() {
  const { t } = useTranslation();
  const [showImage, steShowImage] = useState(certificationImg);
  const [imageChanged, steImageChanged] = useState(false);
  const [changeTo, steChangeTo] = useState(certificationImg);

  useEffect(() => {
    steImageChanged(true);
    const idChanged = setTimeout(() => steImageChanged(false), 100);
    const idShow = setTimeout(() => steShowImage(changeTo), 50);
    return () => {
      clearTimeout(idChanged);
      clearTimeout(idShow);
    };
  }, [changeTo]);

  return (
    <FadeInDown>
      <Container>
        <Row>
          <Col>
            <Paragraph type="header" mb="30">{t('banner.header')}</Paragraph>
            <Paragraph type="title" mb="30">{t('banner.title')}</Paragraph>
            <Paragraph mb="15">{t('banner.description')}</Paragraph>
          </Col>
          <Bg>
            <Image src={showImage} imageChanged={imageChanged} alt="" />
          </Bg>
          <LinkToId
            to={ROUTER_IDS.join}
            duration={500}
            smooth
            spy
          >
            {t('banner.button')}
          </LinkToId>
          <DirectionsText>{t('banner.directionsText')}</DirectionsText>
        </Row>
        <ButtonContainer align="left">
          {buttons.map((item) => (
            <Link
              key={item.id}
              to={`${ROUTER_PATHS.course}/${item.name.replace(/[\s/]/g, '-')}`}
            >
              <Button
                onMouseOver={() => steChangeTo(item.image)}
                onMouseOut={() => steChangeTo(certificationImg)}
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </ButtonContainer>
      </Container>
    </FadeInDown>
  );
}
