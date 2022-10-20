import { useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ROUTER_IDS } from '../utils/routeConst';
// eslint-disable-next-line import/no-cycle
import { homeRoutes } from '../utils/routes';
import Header from '../components/header';
import Footer from '../components/footer';
import './animate.css';

export default () => {
  const location = useLocation();

  return (
    <Element name={ROUTER_IDS.home}>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={500}
        >
          {homeRoutes()}
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </Element>
  );
};
