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
import {searchResults} from "../redux/actions"

const apiURL = "https://reactjs-cdp.herokuapp.com/movies";


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
        //this.filterMoviesByParamAndQuery = this.filterMoviesByParamAndQuery.bind(this);
        this.getMovies = this.getMovies.bind(this);
        this.getMovies("vote_average", "", "title");
    }

    // filterMoviesByParamAndQuery(filter, query){
    //     let URL = apiURL + '?search=' + query + '&searchBy=' + filter;
    //     fetch(URL, {
    //         method: 'GET',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     }).then((response) => {
    //         response.json().then((result) => {
    //             this.setState({
    //                 movieList : result.data,
    //                 total: result.total
    //             })
            
    //         })
    //     } )
    //   }

    onSearchClick(){
        const {query} = this.state;
        const {filters: {searchFilterInfo}} = this.props;
        var currentFilter = this.getCheckedFilterButton(searchFilterInfo);
    
        //var updatedList = this.filterMoviesByParamAndQuery(currentFilter, query);
        //this.setState({movieList: updatedList});
        this.getMovies("vote_average", query, currentFilter);
      }

    handleChange(event){
    this.setState({query: event.target.value});
    }

    getMovies(sortParam, query, filter){
        //const {query} = this.state;
        //const {filters: {searchFilterInfo}} = this.props;
        //var filter = this.getCheckedFilterButton(searchFilterInfo);

        let URL = apiURL + '?search=' + query + '&searchBy=' + filter + '&sortBy=' +sortParam;
        fetch(URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            response.json().then((result) => {
                this.props.dispatch(searchResults(result.data))
                })
                // this.props.searchResults(result.data);
                // this.setState({
                //     total: result.total
                // })
                // return result.data;
        })
    }

    // sortMovies(sortParam){
    //     const {movieList} = this.state;
    //     let param = sortParam.replace(' ', '_').toLowerCase();
    //     const sortedMovies = movieList.sort((a, b) => a[param] - b[param]);
    //     return sortedMovies
    // }

    getCheckedFilterButton(filterInfo){
        return filterInfo.buttonList.filter(filter => filter.checked)[0].text;
      }

    render(){
        const {logo, searchButtonText, updateFilterButtons, movieList, filters: {searchFilterInfo, navigationFilterInfo}} = this.props;
        const {total} = this.state;

        const sortParam = this.getCheckedFilterButton(navigationFilterInfo);
        // const sortedMovies = this.sortMovies(sortParam);
        /*const sortedMovies = *///this.getMovies("vote_average");

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

const mapStateToProps = function(store) {
    return {
      //movieList: store.movieState.movieList,
      filters: store.filterState.filters
    };
  }

export default connect(mapStateToProps)(SearchPage);