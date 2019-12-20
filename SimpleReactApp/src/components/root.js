import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Redirect, Switch, Route,
} from 'react-router-dom';
import ErrorBoundary from './errorBoundary';

import '../css/main.css';

const NotFound = () => <p>404 Not found</p>;
const Loading = () => (
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

const LazySearch = lazy(() => import('./searchPage'));
const LazyDescription = lazy(() => import('./descriptionPage'));

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <ErrorBoundary>
        <Router history={history}>
          <Suspense fallback={Loading()}>
            <Switch>
              <Redirect exact from="/" to="/search" />
              <Route path="/search" component={LazySearch} />
              <Route path="/film/:id" component={LazyDescription} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </ErrorBoundary>
    );
  }
}

Root.propTypes = {
  context: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
  history: PropTypes.string.isRequired,
};

Root.defaultProps = {
  context: null,
};

export default Root;
