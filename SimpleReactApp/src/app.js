import React, { Component} from "react";
import ReactDOM from "react-dom";
import DefaultImage from './images/movie-default.jpg';
import SearchPage from './components/searchPage';
import ResultPage from './components/resultPage';

import '../src/css/main.css';

class Root extends Component {
  constructor(){
    super();
    this.state = {
      logo: 'netflixroulete',
      movieList: [{id: '1', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020', rating: 4.3, duration: '154', description:'lorem ipsum lorem ipsum'}, 
                  {id: '2', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020', rating: 4.3, duration: '154', description:'lorem ipsum lorem ipsum'},
                  {id: '3', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020', rating: 4.3, duration: '154', description:'lorem ipsum lorem ipsum'}],

      filters: {
                searchFilterInfo: {title :"search by", buttonList: [{id: "b1", text: "title", checked: "true"}, {id: "b2", text: "genre", checked: "false"}], searchButtonText : "Search"},
                navigationFilterInfo: {title : "sort by", buttonList: [{id: "b1", text: "Release date", checked: "true"}, {id: "b2", text: "rating", checked: "false"}]}
              }
    }
  }
  render() {
    const {movieList, logo, filters} = this.state;
    return (
      <>
        <SearchPage movieList={movieList} logo={logo} filters={filters}/>
        <ResultPage logo={logo} movie={movieList[0]} filteredMovieList={movieList}/>
      </>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
