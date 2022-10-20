import { useTranslation } from 'react-i18next';
import {
  Container, Image, Text,
} from './styled.about';

import aboutImg from '../../assets/images/about-mobile-bottom.png';

export default function AboutMobBot() {
  const { t } = useTranslation();
  return (
    <Container>
      <Text type="header" bold="bold">{t('about.headerMob')}</Text>
      <Image src={aboutImg} />
    </Container>
  );
}
