import { Switch, Route } from 'react-router-dom';

import AuthProvider from '../hooks/auth/auth.provider';
import { ROUTER_PATHS } from './routeConst';
// eslint-disable-next-line import/no-cycle
import Main from '../pages';
import Admin from '../pages/admin';
import Home from '../pages/home';
import Course from '../pages/course';

const PageNotFound = () => (
  <div style={{
    height: '83vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}
  >
    <h1 style={{ textAlign: 'center' }}> 404 </h1>
  </div>
);

export const mainRoutes = () => (
  <Switch>
    <Route path={ROUTER_PATHS.admin}>
      <AuthProvider>
        <Admin />
      </AuthProvider>
    </Route>

    <Route path={ROUTER_PATHS.home} component={Main} />
  </Switch>
);

export const homeRoutes = () => (
  <Switch>
    <Route exact path={ROUTER_PATHS.home} component={Home} />
    <Route path={`${ROUTER_PATHS.course}/:name`} component={Course} />
    <Route path={ROUTER_PATHS.notFound} component={PageNotFound} />
  </Switch>
);
