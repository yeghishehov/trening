import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getCourses } from '../../store/modules/courses';
import Join from '../../components/join';
import { ROUTER_IDS } from '../../utils/routeConst';
import {
  Container, Paragraph, Image, Bg, Col, Button,
  TextArea, Row, BottomRow, BottomCol, StyledLink,
  ButtonContainerDesktop, ButtonContainerMobile,
  BackArrow, BackArrowContainer,
} from './styled.course';
import { FadeInDown } from '../../components/styled/animation';

import uiuxImg from '../../assets/images/uiux2.png';
import pmImg from '../../assets/images/pm2.png';
import webImg from '../../assets/images/web2.png';
import smmImg from '../../assets/images/smm2.png';

const images = {
  'UX / UI Design': uiuxImg,
  'Web Development': webImg,
  'SMM Marketing': smmImg,
  'Project Management': pmImg,
};

const info = [
  { id: 0, title: 'Faculty', text: 'We will teach web development from' },
  { id: 1, title: 'Faculty', text: 'We will teach web development from' },
  { id: 2, title: 'Faculty', text: 'We will teach web development from' },
  { id: 3, title: 'Faculty', text: 'We will teach web development from' },
];

export default function Course() {
  const { t } = useTranslation();
  const { name } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.courses);

  const isValidPage = Object.keys(images).find((item) => (
    item.replace(/[\s/]/g, '-') === name
  ));

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  useEffect(() => {
    if (!isValidPage) {
      history.push('/page-not-found');
    }
  }, [history, isValidPage]);

  const course = data.find((item) => item.name === isValidPage);

  if (data.length && !course) return <Redirect to="/page-not-found" />;

  return (
    <>
      <FadeInDown>
        <Container>
          <BackArrowContainer>
            <BackArrow onClick={() => history.goBack()} />
            <Paragraph type="header">{`${t('course.header')} ${course?.name}`}</Paragraph>
          </BackArrowContainer>
          <Row>
            <Bg>
              <Image src={images[course?.name]} alt="" />
            </Bg>
            <Col>
              <TextArea>
                <Paragraph>{t('course.description')}</Paragraph>
              </TextArea>
              <ButtonContainerDesktop>
                <StyledLink to={ROUTER_IDS.join} spy smooth duration={500}>
                  <Button>{t('course.button')}</Button>
                </StyledLink>
              </ButtonContainerDesktop>
            </Col>
          </Row>
          <ButtonContainerMobile>
            <StyledLink to={ROUTER_IDS.join} spy smooth duration={500}>
              <Button>{t('course.button')}</Button>
            </StyledLink>
          </ButtonContainerMobile>
          <BottomRow>
            {info.map((item) => (
              <BottomCol key={item.id}>
                <Paragraph type="title" align="center" mb={15}>{item.title}</Paragraph>
                <Paragraph type="text" align="center">{item.text}</Paragraph>
              </BottomCol>
            ))}
          </BottomRow>
        </Container>
      </FadeInDown>
      <Join />
    </>
  );
}
