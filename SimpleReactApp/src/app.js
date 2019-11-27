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
  }

  updateFilterButtons(buttons, type){
    const filter = this.state.filters[type];
    const currentState = {...filter, buttonList: buttons};
    this.setState({filter: currentState});
  }

  getCheckedFilterButton(filterInfo){
    return filterInfo.buttonList.filter(filter => filter.checked)[0].text;
  }

  render() {
    const {movieList, logo, filters, searchButtonText} = this.state;

    return (
      <ErrorBoundary>
        <SearchPage movieList={movieList} logo={logo} filters={filters} searchButtonText={searchButtonText} updateFilterButtons={this.updateFilterButtons} getCheckedFilterButton={getCheckedFilterButton} getCheckedFilterButton={getCheckedFilterButton}/>
        <DescriptionPage logo={logo} movieId={1} movieList={filteredMoviesByGenre}/>
      </ErrorBoundary>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
