import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/auth/auth.provider';
import Settings from './settings';
import Learners from '../learners';
import Feedbacks from '../feedbacks';
import Trainers from '../trainers';
import Courses from '../courses';
import {
  Container, Header, Button, StyledSettingsIcon, StyledLink, Col,
} from './styled.panel';

export const paths = {
  learners: '/admin',
  feedbacks: '/admin/feedbacks',
  trainers: '/admin/trainers',
  courses: '/admin/courses',
};

export default function Panel() {
  const { logout } = useAuthContext();
  const [openSettings, setOpenSettings] = useState(false);

  const handleOpenSettings = () => {
    setOpenSettings(true);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Container>
      <Header>
        <Col>
          <StyledLink to={paths.learners}>Learners</StyledLink>
          <StyledLink to={paths.feedbacks}>Feedbacks</StyledLink>
          <StyledLink to={paths.trainers}>Trainers</StyledLink>
          <StyledLink to={paths.courses}>Courses</StyledLink>
          <StyledLink to="/">Go to web site</StyledLink>
        </Col>

        <Col>
          <StyledSettingsIcon onClick={handleOpenSettings} />
          <Button onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Header>

      <Switch>
        <Route exact path={paths.learners} component={Learners} />
        <Route path={paths.feedbacks} component={Feedbacks} />
        <Route path={paths.trainers} component={Trainers} />
        <Route path={paths.courses} component={Courses} />
      </Switch>

      <Settings open={openSettings} setOpen={setOpenSettings} />
    </Container>
  );
}
