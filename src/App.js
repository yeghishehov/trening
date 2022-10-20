import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { mainRoutes } from './utils/routes';
import ScrollToTop from './utils/scrollToTop';
import store from './utils/configureStore';
import GlobalStyles from './utils/globalStyle';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        {mainRoutes()}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
