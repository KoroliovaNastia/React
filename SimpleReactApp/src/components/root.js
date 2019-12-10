import React, { Component} from "react";
import SearchPage from './searchPage';
import DescriptionPage from './descriptionPage';
import ErrorBoundary from './errorBoundary';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import '../css/main.css';

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

    return (
      <Router>
    <ErrorBoundary>
      <>
          {/* <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/searchPage'} className="nav-link">Search</Link></li>
            <li><Link to={'/movie'} className="nav-link">Movie</Link></li>
          </ul>
          </nav>
          <hr /> */}
      <Switch>
          <Route exact path='/' component={SearchPage}/>
          <Route exact path='/searchPage' component={SearchPage}/>
          <Route path='/movie' component={DescriptionPage}/> 
      </Switch>
      </>
      {/* <SearchPage logo={logo} searchButtonText={searchButtonText}/> */}
      {/* <DescriptionPage logo={logo} movieId="348350"/> */}
    </ErrorBoundary>
      </Router>
    );
  }
}

export default Root 
