/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import { getCourses } from '../../store/modules/courses';
import { ROUTER_IDS, ROUTER_PATHS } from '../../utils/routeConst';
import { baseURL } from '../../utils/axiosConfig';

import Modal from './modal';
import CardContainer from '../styled/cardContainer';
import { FadeInDown } from '../styled/animation';
import {
  Container, Card, Text, Icon, StyledLink,
} from './styled.courses';

const currentCourses = [
  'UX / UI Design',
  'Web Development',
  'SMM Marketing',
  'Project Management',
];

export default function Courses() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.courses);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dispatch(getCourses());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Element name={ROUTER_IDS.courses}>
      <FadeInDown>
        <Container>
          <Text type="header" bold="bold">{t('courses.header')}</Text>
          <CardContainer>
            {data.map((course) => (
              currentCourses.some((courseName) => courseName === course.name)
                ? (
                  <StyledLink
                    key={course._id}
                    to={`${ROUTER_PATHS.course}/${course.name.replace(/[\s/]/g, '-')}`}
                  >
                    <Card border>
                      <Icon src={`${baseURL}/../../${course.icon}`} />
                      <Text type="title2" bold={500}>{course.name}</Text>
                      <Text bold={500} mt={17}>{course.description}</Text>
                    </Card>
                  </StyledLink>
                ) : (
                  <Card key={course._id} border onClick={() => setOpenModal(true)}>
                    <Icon src={`${baseURL}/../../${course.icon}`} />
                    <Text type="title2" bold={500}>{course.name}</Text>
                    <Text bold={500} mt={17}>{course.description}</Text>
                  </Card>
                )
            ))}
          </CardContainer>
        </Container>
        <Modal open={openModal} setOpen={setOpenModal} />
      </FadeInDown>
    </Element>
  );
}
