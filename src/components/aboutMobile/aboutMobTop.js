import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { ROUTER_IDS } from '../../utils/routeConst';
import { FadeInDown } from '../styled/animation';
import {
  Container, Row, Column, Image, Text,
} from './styled.about';

import aboutMobileImg from '../../assets/images/about-mobile.png';

export default function AboutMobTop() {
  const { t } = useTranslation();
  return (
    <Element name={ROUTER_IDS.about}>
      <FadeInDown>
        <Container>
          <Text type="header" bold="bold">{t('about.header')}</Text>
          <Row>
            <Column>
              <Text type="title2" bold={500} align="left">{t('about.description')}</Text>
            </Column>
            <Image mobile src={aboutMobileImg} />
          </Row>
        </Container>
      </FadeInDown>
    </Element>
  );
}
