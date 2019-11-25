import React, { Component} from "react";
import ReactDOM from "react-dom";
import DefaultImage from './images/movie-default.jpg';
import SearchPage from './components/searchPage';
import DescriptionPage from './components/descriptionPage';
import ErrorBoundary from './components/errorBoundary';

import '../src/css/main.css';

class Root extends Component {
  constructor(){
    super();
    this.state = {
      logo: 'netflixroulete',
      searchButtonText : "Search",
      query: "",
      movieList: [{id: '1', image: DefaultImage, title:'Not yet...', genre:'Adventure', releaseDate:'2019', rating: '4.3', duration: '154', description:'lorem ipsum lorem ipsum', isShowing: true}, 
                  {id: '2', image: DefaultImage, title:'Soon...', genre:'Horror', releaseDate:'2020', rating: '4.3', duration: '154', description:'lorem ipsum lorem ipsum', isShowing: true},
                  {id: '3', image: DefaultImage, title:'Future...', genre:'Psychology', releaseDate:'2021', rating: '4.3', duration: '154', description:'lorem ipsum lorem ipsum', isShowing: true},
                  {id: '4', image: DefaultImage, title:'Ones upon a time', genre:'Adventure', releaseDate:'2021', rating: '4.3', duration: '154', description:'lorem ipsum lorem ipsum', isShowing: true}],

      filters: {
                searchFilterInfo: {title : "search by", buttonList: [{id: "b1", text: "title", checked: true}, {id: "b2", text: "genre", checked: false}]},
                navigationFilterInfo: {title : "sort by", buttonList: [{id: "f1", text: "Release date", checked: true}, {id: "f2", text: "rating", checked: false}]}
      }
    }
  }

  onSearchClick(){
    const {query, movieList, filters: {searchFilterInfo}} = this.state;
    var updatedList = movieList;

    var currentFilter = searchFilterInfo.buttonList.filter(filter => filter.checked)[0].text;

    updatedList = filterMoviesByFilter(updatedList, currentFilter, query);
    this.setState({movieList: updatedList});
  }

  filterMoviesByParamAndQuery(movies, filter, query){
    const updatedMovies =  movies.map( movie => {
      const isShowing = movie[filter].toLowerCase().indexOf(query.toLowerCase()) !== -1;
      return this.updateMovieShowing(movie, isShowing);
    })
    
    return updatedMovies;
  }

  updateMovieShowing(movie, isShowing){
    return {
      id: movie.id, 
      image: movie.image, 
      title: movie.title, 
      genre: movie.genre, 
      releaseDate:movie.releaseDate, 
      rating: movie.rating, 
      duration: movie.duration, 
      description: movie.description, 
      isShowing: isShowing
    }
} 

  handleChange(){
    this.setState({query: event.target.value});
  }

  render() {
    const {movieList, logo, filters, searchButtonText} = this.state;
    let filteredMoviesByGenre = this.filterMoviesByParamAndQuery(movieList, "genre", movieList[0].genre)
    return (
      <ErrorBoundary>
        <SearchPage movieList={movieList} logo={logo} filters={filters} searchButtonText={searchButtonText} onSearchClick={this.onSearchClick.bind(this)} handleChange={this.handleChange.bind(this)}/>
        <DescriptionPage logo={logo} movie={movieList[0]} filteredMovieList={filteredMoviesByGenre}/>
      </ErrorBoundary>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
