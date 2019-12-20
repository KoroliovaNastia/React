import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { StaticRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { configureStore } from './redux/store';
import Routes from './components/routes';
import ErrorBoundary from './components/errorBoundary';


const store = configureStore(window.PRELOADED_STATE);

hydrate(
  <Provider store={store}>
    <ErrorBoundary>
      <StaticRouter>
        <Switch>
          {renderRoutes(Routes)}
        </Switch>
      </StaticRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
