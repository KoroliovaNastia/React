import React, { Component} from "react";
import SearchPage from './searchPage';
import DescriptionPage from './descriptionPage';
import ErrorBoundary from './errorBoundary';

import '../css/main.css';

class Root extends Component {
  constructor(){
    super();
    this.state = {
      logo: 'netflixroulete',
      searchButtonText : "Search"
    };

    //this.updateFilterButtons = this.updateFilterButtons.bind(this);
    //this.setIsShowing = this.setIsShowing.bind(this);
  }

  // updateFilterButtons(buttons, type){
  //   const {filters} = this.state;
  //   const currentState = {...filters[type], buttonList: buttons};
  //   this.setState({...filters[type] = currentState});
  // }
  
  // setIsShowing(movie, isShowing)
  // {
  //   return {...movie, isShowing: isShowing};
  // }

  render() {
    const {logo, searchButtonText} = this.state;

    return (
      <ErrorBoundary>
        <SearchPage logo={logo} searchButtonText={searchButtonText} /*updateFilterButtons={this.updateFilterButtons}*/ /*setIsShowing={this.setIsShowing}*//>
        <DescriptionPage logo={logo} movieId="348350" /*setIsShowing={this.setIsShowing}*//>
      </ErrorBoundary>
    );
  }
}

export default Root 
