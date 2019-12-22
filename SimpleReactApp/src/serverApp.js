import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { StaticRouter, Switch, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { configureStore } from './redux/store';
import Routes from './components/routes';
import ErrorBoundary from './components/errorBoundary';
import SearchPage from './components/searchPage';
import DescriptionPage from './components/descriptionPage';


const store = configureStore(window.PRELOADED_STATE);

hydrate(
  <Provider store={store}>
    <ErrorBoundary>
      <StaticRouter>
        <Switch>
          <Route path="/" component={SearchPage} />
          <Route path="/movies" component={SearchPage} />
          <Route path="/film/:id" component={DescriptionPage} />
        </Switch>
      </StaticRouter>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root'),
);
