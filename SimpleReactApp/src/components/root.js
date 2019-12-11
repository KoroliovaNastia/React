import React, { Component} from "react";
import SearchPage from './searchPage';
import DescriptionPage from './descriptionPage';
import ErrorBoundary from './errorBoundary';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//import {syncHistoryWithStore} from 'react-router-redux'
import store from "../redux/store";

import '../css/main.css';

//const history = syncHistoryWithStore(browserHistory, store)
const NotFound = () => <p>404 Not found</p>;

class Root extends Component {
  constructor(){
    super();
    // this.state = {
    //   logo: 'netflixroulete',
    //   searchButtonText : "Search"
    // };
  }

  render() {
    //const {logo, searchButtonText} = this.state;
    const {history} = this.props;
    return (
      <ErrorBoundary>
        <Router history={history}>
          <Switch>
              {/* <Route exact path='/' component={SearchPage}/> */}
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
