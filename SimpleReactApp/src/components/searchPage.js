import React, {Component} from "react";
import Footer from './footer';
import Main from './main';
import Logo from './logo';
import Header from './header';
import Search from './search';
import SearchNavigation from './searchNavigation';
import Box from './box';
import store from "../redux/store"
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'

import {connect} from 'react-redux';
import {changeQuery} from "../redux/actions"
import {getMovies, getCheckedFilterButton, updateMovieList} from "../redux/actions/get"


class SearchPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: "",
            logo: 'netflixroulete',
            searchButtonText : "Search"
        },

        this.onSearchClick = this.onSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        const params = new URLSearchParams(this.props.location.search);
        const query = params.get('query');
        this.props.getQuery(query);
        //this.setState({query: params.get('query')})
        //const {navigationFilters, queryString, searchFilters, updateMovies} = this.props;
        //updateMovies(navigationFilters, queryString, searchFilters);
    }
    
    componentDidUpdate(prevProps){
        const {navigationFilters, queryString, searchFilters, updateMovies} = this.props;
        if(navigationFilters !== prevProps.navigationFilters ||
            searchFilters !== prevProps.searchFilters ||
            queryString !== prevProps.queryString){
         //const {navigationFilters, queryString, searchFilters} = this.props;
            updateMovies(navigationFilters, queryString, searchFilters);
        }
     }

    onSearchClick(){
        const {getQuery} = this.props;
        getQuery(this.state.query);

        //const {navigationFilters, queryString, searchFilters} = this.props;
        //updateMovieList(navigationFilters, this.state.query, searchFilters);
    }

    handleChange(event){
        this.setState({query: event.target.value});
    }

    render(){
        const {searchButtonText, updateFilterButtons, movies, searchFilters, navigationFilters} = this.props;
        //const {total} = this.state;

        return(
        <>
            <Header>
                <Logo logo = {this.state.logo}/>
                <Search searchButtonText={searchButtonText} onSearchClick={this.onSearchClick} handleChange={this.handleChange}/>
            </Header>
            <Box>
                <p>{/*movies.length*/0} movie found</p>
                <SearchNavigation updateFilterButtons={updateFilterButtons}/>
            </Box>
            <Main movieList={movies}/>
            <Footer>
                <Box>
                <Logo logo = {this.state.logo}/>
                </Box>
            </Footer>
        </>
    )}
}

function mapStateToProps(store) {
    return {
      movies: store.movieState.movieList,
      searchFilters: store.filterState.searchFilterInfo,
      navigationFilters: store.filterState.navigationFilterInfo,
      queryString: store.filterState.query
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        getQuery: currentQuery => dispatch(changeQuery(currentQuery)),
        updateMovies: (navigationFilters, queryString, searchFilters) => dispatch(updateMovieList(navigationFilters, queryString, searchFilters))
    }
   }  

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));