import React, { Component} from "react";
import DefaultImage from '../src/images/movie-default.jpg';
import SearchPage from './searchPage';
import DescriptionPage from './descriptionPage';
import ErrorBoundary from './errorBoundary';

import '../src/css/main.css';

class Root extends Component {
  constructor(){
    super();
    this.state = {
      logo: 'netflixroulete',
      searchButtonText : "Search",
      movieList: [{id: '1', image: DefaultImage, title:'Not yet...', genre:'Adventure', release_date: '2022', rating: '5.0', duration: '154', description:'lorem ipsum lorem ipsum', isShowing: true}, 
                  {id: '2', image: DefaultImage, title:'Soon...', genre:'Horror', release_date: '2020', rating: '4.1', duration: '154', description:'lorem ipsum lorem ipsum', isShowing: true},
                  {id: '3', image: DefaultImage, title:'Future...', genre:'Psychology', release_date: '2019', rating: '5.0', duration: '154', description:'lorem ipsum lorem ipsum', isShowing: true},
                  {id: '4', image: DefaultImage, title:'Ones upon a time', genre:'Adventure', release_date: '2021', rating: '4.3', duration: '154', description:'lorem ipsum lorem ipsum', isShowing: true}],

      filters: {
                searchFilterInfo: {type: "searchFilterInfo", title : "search by", buttonList: [{id: "b1", text: "title", checked: true}, {id: "b2", text: "genre", checked: false}]},
                navigationFilterInfo: {type: "navigationFilterInfo", title: "sort by", buttonList: [{id: "f1", text: "Release date", checked: true}, {id: "f2", text: "rating", checked: false}]}
      }
    };

    this.updateFilterButtons = this.updateFilterButtons.bind(this);
    this.setIsShowing = this.setIsShowing.bind(this);
  }

  updateFilterButtons(buttons, type){
    const {filters} = this.state;
    const currentState = {...filters[type], buttonList: buttons};
    this.setState({...filters[type] = currentState});
  }
  
  setIsShowing(movie, isShowing)
  {
    return {...movie, isShowing: isShowing};
  }

  render() {
    const {movieList, logo, filters, searchButtonText} = this.state;

    return (
      <ErrorBoundary>
        <SearchPage movieList={movieList} logo={logo} filters={filters} searchButtonText={searchButtonText} updateFilterButtons={this.updateFilterButtons} setIsShowing={this.setIsShowing}/>
        <DescriptionPage logo={logo} movieId={"1"} movieList={movieList} setIsShowing={this.setIsShowing}/>
      </ErrorBoundary>
    );
  }
}

export default Root 
