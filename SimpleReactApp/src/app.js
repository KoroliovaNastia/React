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
      movieList: [{id: '1', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020'}, 
      {id: '2', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020'},
       {id: '3', image: DefaultImage, title:'Soon...', genre:'Drama', releaseDate:'2020'}]
    }
  }
  render() {
    const {movieList, logo} = this.state;
    return (
      <>
        <SearchPage movieList={movieList} logo={logo}/>
        <ResultPage/>
      </>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
