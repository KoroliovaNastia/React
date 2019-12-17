import React, { Component} from "react";
// import SearchPage from './searchPage';
// import DescriptionPage from './descriptionPage';
import ErrorBoundary from './errorBoundary';
import {StaticRouter as Router, Redirect, Switch, Route, Link} from 'react-router-dom';

import '../css/main.css';

const NotFound = () => <p>404 Not found</p>;
const Loading = () => 
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>

const LazySearch = React.lazy(() => import('./SearchPage'))
const LazyDescription = React.lazy(() =>import('./DescriptionPage'))

class Root extends Component {
  constructor(){
    super();
  }

  render() {
    const {history} = this.props;
    return (
      <ErrorBoundary>
        <Router.Suspense fallback={<Loading />} history={history}>
          <Switch>
              <Redirect exact from='/' to="/search"/>
              <Route path="/search" component={LazySearch}/>
              <Route path="/film/:id" component={LazyDescription}/>
              <Route path="*" component={NotFound}/>
          </Switch>
        </Router.Suspense>
      </ErrorBoundary>
    );
  }
}

export default Root