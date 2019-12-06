import React, {Component} from "react";
import Footer from './footer';
import Main from './main';
import Logo from './logo';
import Header from './header';
import Search from './search';
import SearchNavigation from './searchNavigation';
import Box from './box';
import store from "../redux/store"

import {connect} from 'react-redux';
import {changeQuery} from "../redux/actions"
import {getMovies} from "../redux/actions/get"


class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: "",
            movieList: [],
            total: 0
        },

        this.onSearchClick = this.onSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getCheckedFilterButton = this.getCheckedFilterButton.bind(this);
        //this.props.getMovieList(getMovies("", "vote_average", "title", ""));
        //this.filterMoviesByParamAndQuery = this.filterMoviesByParamAndQuery.bind(this);
        //this.getMovies = this.getMovies.bind(this);
        //this.getMovies("vote_average", "", "title");
    }

    componentDidMount(){
        //const movies = getMovies("", "vote_average", "title", "");
        this.props.getMovieList("", "vote_average", "title", "");
    }

    onSearchClick(){
        // const {query, filters: {searchFilterInfo}} = this.props;
        // var currentFilter = this.getCheckedFilterButton(searchFilterInfo);
        // this.getMovies("vote_average", query, currentFilter);
        this.props.getQuery(this.state.query);
    }

    handleChange(event){
    this.setState({query: event.target.value});
    }

    getCheckedFilterButton(filterInfo){
        return filterInfo.buttonList.filter(filter => filter.checked)[0].text;
      }

    render(){
        const {logo, searchButtonText, updateFilterButtons, movieList, filters: {searchFilterInfo, navigationFilterInfo}} = this.props;
        const {total} = this.state;

        const searchBy = this.getCheckedFilterButton(navigationFilterInfo).replace(' ', '_').toLowerCase();;
        this.props.getMovieList(this.props.query, "vote_average", searchBy, "")

        return(
        <>
            <Header>
                <Logo logo = {logo}/>
                <Search filterInfo={searchFilterInfo} searchButtonText={searchButtonText} movieList={/*sortedMovies*/movieList} onSearchClick={this.onSearchClick} handleChange={this.handleChange} updateFilterButtons={updateFilterButtons}/>
            </Header>
            <Box>
                <p>{total} movie found</p>
                <SearchNavigation filterInfo={navigationFilterInfo} updateFilterButtons={updateFilterButtons}/>
            </Box>
            <Main movieList={/*sortedMovies*/movieList}/>
            <Footer>
                <Box>
                <Logo logo = {logo}/>
                </Box>
            </Footer>
        </>
    )}
}

function mapStateToProps(store) {
    return {
      movieList: store.movieState.movieList,
      filters: store.filterState.filters,
      query: store.movieState.query
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        getMovieList: (query, sortBy, searchBy, filter) => getMovies(query, sortBy, searchBy, filter),
        getQuery: currentQuery => dispatch(changeQuery(currentQuery))
    }
   }  

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);