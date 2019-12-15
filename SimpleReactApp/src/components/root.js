import React, { Component} from "react";
import SearchPage from './searchPage';
import DescriptionPage from './descriptionPage';
import ErrorBoundary from './errorBoundary';
import {MemoryRouter, BrowserRouter as Router, Redirect, Switch, Route, Link} from 'react-router-dom';

import '../css/main.css';

const NotFound = () => <p>404 Not found</p>;

class Root extends Component {
  constructor(){
    super();
  }

  render() {;
    const {history} = this.props;
    return (
      <ErrorBoundary>
        <Router history={history}>
          <Switch>
              <Redirect exact from='/' to="/search"/>
              <Route path="/search" name="search" component={SearchPage}/>
              <Route path="/film/:id" name="film" component={DescriptionPage}/>
              <Route path="*" component={NotFound}/>
          </Switch>
        </Router>
      </ErrorBoundary>
    );
  }
}

export default Root 
