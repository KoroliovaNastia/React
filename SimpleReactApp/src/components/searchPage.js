import React, {Component} from "react";
import Footer from './footer';
import Main from './main';
import Logo from './logo';
import Header from './header';
import Search from './search';
import SearchNavigation from './searchNavigation';
import Box from './box';

class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: "",
            movieList: props.movieList
        },

        this.onSearchClick = this.onSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getCheckedFilterButton = this.getCheckedFilterButton.bind(this);
        this.filterMoviesByParamAndQuery = this.filterMoviesByParamAndQuery.bind(this);
    }

    filterMoviesByParamAndQuery(filter, query){
        const {setIsShowing} = this.props;
        const {movieList} = this.state;
        const updatedMovies =  movieList.map( movie => {
          const isShowing = movie[filter].toLowerCase().indexOf(query.toLowerCase()) !== -1;
          return setIsShowing(movie, isShowing);
        })
        
        return updatedMovies;
      }

    onSearchClick(){
        const {query} = this.state;
        const {filters: {searchFilterInfo}} = this.props;
        var currentFilter = this.getCheckedFilterButton(searchFilterInfo);
    
        var updatedList = this.filterMoviesByParamAndQuery(currentFilter, query);
        this.setState({movieList: updatedList});
      }

    handleChange(event){
    this.setState({query: event.target.value});
    }

    sortMovies(sortParam){
        const {movieList} = this.state;
        let param = sortParam.replace(' ', '_').toLowerCase();
        const sortedMovies = movieList.sort((a, b) => a[param] - b[param]);
        return sortedMovies
    }

    getCheckedFilterButton(filterInfo){
        return filterInfo.buttonList.filter(filter => filter.checked)[0].text;
      }

    render(){
        const {logo, searchButtonText, updateFilterButtons, filters: {searchFilterInfo, navigationFilterInfo}} = this.props;

        const sortParam = this.getCheckedFilterButton(navigationFilterInfo);
        const sortedMovies = this.sortMovies(sortParam);

        return(
        <>
            <Header>
                <Logo logo = {logo}/>
                <Search filterInfo={searchFilterInfo} searchButtonText={searchButtonText} movieList={sortedMovies} onSearchClick={this.onSearchClick} handleChange={this.handleChange} updateFilterButtons={updateFilterButtons}/>
            </Header>
            <Box>
                <p>{sortedMovies.length} movie found</p>
                <SearchNavigation filterInfo={navigationFilterInfo} updateFilterButtons={updateFilterButtons}/>
            </Box>
            <Main movieList={sortedMovies}/>
            <Footer>
                <Box>
                <Logo logo = {logo}/>
                </Box>
            </Footer>
        </>
    )}
}

export default SearchPage