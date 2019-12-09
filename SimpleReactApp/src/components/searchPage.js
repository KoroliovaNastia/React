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
import {getMovies, getCheckedFilterButton} from "../redux/actions/get"


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
        //this.getCheckedFilterButton = this.getCheckedFilterButton.bind(this);
        //this.props.getMovieList(getMovies("", "vote_average", "title", ""));
        //this.filterMoviesByParamAndQuery = this.filterMoviesByParamAndQuery.bind(this);
        //this.getMovies = this.getMovies.bind(this);
        //this.getMovies("vote_average", "", "title");
    }

    componentDidMount(){
        //const movies = getMovies("", "vote_average", "title", "");
        const {query, navigationFilterInfo, searchFilterInfo} = this.props;
        const sortBy = getCheckedFilterButton(navigationFilterInfo);
        const searchBy = getCheckedFilterButton(searchFilterInfo);
        //this.props.getMovieList("", "vote_average", "title", "");
        this.props.getMovieList(/*query*/"kill", sortBy, searchBy, "")
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

    render(){
        const {logo, searchButtonText, updateFilterButtons, movieList, searchFilterInfo, navigationFilterInfo} = this.props;
        const {total} = this.state;

        //const searchBy = this.getCheckedFilterButton(navigationFilterInfo).replace(' ', '_').toLowerCase();
        //this.props.getMovieList(this.props.query, "vote_average", searchBy, "")

        return(
        <>
            <Header>
                <Logo logo = {logo}/>
                <Search searchButtonText={searchButtonText} /*movieList={movieList}*/ onSearchClick={this.onSearchClick} handleChange={this.handleChange} /*updateFilterButtons={updateFilterButtons}*//>
            </Header>
            <Box>
                <p>{total} movie found</p>
                <SearchNavigation updateFilterButtons={updateFilterButtons}/>
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
      searchFilterInfo: store.filterState.searchFilterInfo,
      navigationFilterInfo: store.filterState.navigationFilterInfo,
      query: store.movieState.query
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        getMovieList: (query, sortBy, searchBy, filter) => getMovies(query, sortBy, searchBy, filter, dispatch),
        getQuery: currentQuery => dispatch(changeQuery(currentQuery))
    }
   }  

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);