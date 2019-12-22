import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router, Redirect, Switch, Route,
} from 'react-router-dom';
import ErrorBoundary from './errorBoundary';
import styled from 'styled-components';
import SearchPage from './searchPage';
import DescriptionPage from './descriptionPage';

import '../css/main.css';

const NotFound = () => <p>404 Not found</p>;
const Loading = () => (
  <div className="spinner-border" role="status">
    <span className="sr-only">Loading...</span>
  </div>
);

//const SearchPage = lazy(() => import('./searchPage'));
//const DescriptionPage = lazy(() => import('./descriptionPage'));

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
                <Route path="/movies" component={SearchPage} />
                <Route path="/film/:id" component={DescriptionPage} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Suspense>
          </Router>
        </ErrorBoundary>
      </Body>
    );
  }
}

// Root.propTypes = {
//   context: PropTypes.shape({
//     url: PropTypes.string,
//   }),
//   history: PropTypes.string,
// };

// Root.defaultProps = {
//   context: null,
//   history: undefined,
// };

export default Root;
