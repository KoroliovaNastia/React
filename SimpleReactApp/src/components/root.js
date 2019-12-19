import React, { Component, lazy, Suspense} from "react";
 import SearchPage from './searchPage';
 import DescriptionPage from './descriptionPage';
 import PropTypes from 'prop-types';
import ErrorBoundary from './errorBoundary';
import {StaticRouter, Redirect, Switch, Route, Link} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import Routes from './routes'

import '../css/main.css';

const NotFound = () => <p>404 Not found</p>;
const Loading = () => 
  <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
  </div>

//const LazySearch = lazy(() => import('./searchPage'))
//const LazyDescription = lazy(() =>import('./descriptionPage'))

class Root extends Component{ 
  constructor(props){
    super(props)
  }
  render(){
    const {Router, location, context, history} = this.props
    return (
      // <ErrorBoundary>
      //   <Router history={history} location={location} context={context}>
      //     {/*<Suspense fallback={<Loading />}>*/}
      //       <Switch>
      //           {/* <Redirect exact from='/' to="/search"/> */}
      <ErrorBoundary>
      <Router location={location} context={context}>
         <Switch> 
          {/*<Route path="/" component={SearchPage}/>
          <Route exact path="/film/:id" /*component={LazyDescription}component={DescriptionPage}/>
          <Route path="/" component={SearchPage}/>
          <Route path="*" component={NotFound}/>*/}
          <div>{renderRoutes(routes)}</div>
         </Switch>
         </Router> 
      </ErrorBoundary>

      //           <Route path="/search" /*component={LazySearch}*/ component={SearchPage}/>
      //           {/* <Route path="/film/:id" /*component={LazyDescription} component={DescriptionPage}/>
      //           <Route path="*" component={NotFound}/> */}
      //       </Switch>
      //     {/*</Suspense>*/}
      //   </Router>
      // </ErrorBoundary>
)}
}

Root.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.shape({
    url: PropTypes.string
  })
}

Root.defaultProps = {
  location: null,
  context: null
}
  
export default Root