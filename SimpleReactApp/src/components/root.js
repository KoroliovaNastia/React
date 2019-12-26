import React, { Component, /* lazy, */ Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Redirect, Switch, Route,
} from 'react-router-dom';
import styled from 'styled-components';
import ErrorBoundary from './errorBoundary';
import SearchPage from './searchPage';
import DescriptionPage from './descriptionPage';
import { renderRoutes, matchRoutes } from 'react-router-config';
import routes from './routes';
import '../css/main.css';

const NotFound = () => <p>404 Not found</p>;
const Loading = () => (
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

// const SearchPage = lazy(() => import('./searchPage'));
// const DescriptionPage = lazy(() => import('./descriptionPage'));

const Body = styled.div`
  background-color: #232323;
  color: #FFF;
`;

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <Body>
        <ErrorBoundary>
          <Router history={history}>
            <Suspense fallback={Loading()}>
              <Switch>
                <Redirect exact from="/" to="/movies" />
                {renderRoutes(routes)}
              </Switch>
            </Suspense>
          </Router>
        </ErrorBoundary>
      </Body>
    );
  }
}

Root.propTypes = {
  context: PropTypes.shape({
    url: PropTypes.string,
  }),
  history: PropTypes.string,
};

Root.defaultProps = {
  context: null,
  history: undefined,
};

export default Root;
