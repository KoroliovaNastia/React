import React, { Component, lazy, Suspense} from "react";
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

const LazySearch = lazy(() => import('./searchPage'))
const LazyDescription = lazy(() =>import('./descriptionPage'))

class Root extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {history} = this.props;
    return (
      <ErrorBoundary>
        <Router history={history}>
          <Suspense fallback={<Loading />}>
            <Switch>
                <Redirect exact from='/' to="/search"/>
                <Route path="/search" component={LazySearch}/>
                <Route path="/film/:id" component={LazyDescription}/>
                <Route path="*" component={NotFound}/>
            </Switch>
          </Suspense>
        </Router>
      </ErrorBoundary>
    );
  }
}

export default Root