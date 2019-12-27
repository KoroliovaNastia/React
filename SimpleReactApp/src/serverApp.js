import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import styled from 'styled-components';
import { configureStore } from './redux/store';
import Routes from './components/routes';
import ErrorBoundary from './components/errorBoundary';
import SearchPage from './components/searchPage';
import DescriptionPage from './components/descriptionPage';
import routes from './components/routes';

let store;
store = configureStore(window.PRELOADED_STATE);
if (store === undefined) {
  store = configureStore();
}

const Body = styled.div`
  background-color: #232323;
  color: #FFF;
`;

hydrate(
  <Provider store={store}>
    <Body>
      <ErrorBoundary>
        <StaticRouter>
          <Switch>
            {renderRoutes(routes)}
            {/* <Route path='*' component={DescriptionPage}/> */}
          </Switch>
        </StaticRouter>
      </ErrorBoundary>
    </Body>
  </Provider>,
  document.getElementById('root'),
);
