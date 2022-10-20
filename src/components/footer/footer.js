import { useTranslation } from 'react-i18next';
import { ReactComponent as Fb } from '../../assets/icons/fb.svg';
import { ReactComponent as In } from '../../assets/icons/in.svg';
import { ReactComponent as Ig } from '../../assets/icons/ig.svg';
import Logo from '../styled/logo';
import {
  Container, Col, Text, Row, Button,
} from './styled.footer';

const links = [
  { id: 1, icon: <Fb />, href: 'https://www.facebook.com/QuestLineLLC' },
  { id: 2, icon: <In />, href: 'https://www.linkedin.com/company/questlinellc' },
  { id: 3, icon: <Ig />, href: 'https://www.instagram.com/questlinellc' },
];

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Container>
      <Col>
        <Logo />
      </Col>
      <Col>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Text primary>{t('footer.text1')}</Text>
        <Text primary>{t('footer.text2')}</Text>
      </Col>
      <Col>
        <Text>{t('footer.email')}</Text>
        <Text>{t('footer.state')}</Text>
        <Text>{t('footer.phone')}</Text>
      </Col>
      <Col>
        <Row>
          {links.map((item) => (
            <Button
              key={item.id}
              as="a"
              href={item.href}
              target="_blank"
            >
              {item.icon}
            </Button>
          ))}
        </Row>
        <Text>{t('footer.QL')}</Text>
      </Col>
    </Container>
  );
}
