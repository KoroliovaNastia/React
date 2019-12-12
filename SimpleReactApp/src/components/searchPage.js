import React, {Component} from "react";
import Footer from './footer';
import Main from './main';
import Logo from './logo';
import Header from './header';
import Search from './search';
import SearchNavigation from './searchNavigation';
import Box from './box';
import { withRouter } from 'react-router-dom'
import { updateFilters } from "../redux/actions/";

import {connect} from 'react-redux';
import {updateMovieList} from "../redux/actions/get"
import {CHANGE_NAVIGATION_FILTERS, CHANGE_SEARCH_FILTERS} from "../redux/constants/action-types"


class SearchPage extends Component {
    constructor(props){
        super(props);

        this.updateFilterByUrl = this.updateFilterByUrl.bind(this);
    }

    componentDidMount(){
        const params = new URLSearchParams(this.props.location.search);
        const query = params.get('query');
        if (query !== null){
            this.props.getQuery(query);
        }
        const searchBy = params.get("searchBy");
        const sortBy = params.get("sortBy");
        if( searchBy !== undefined && searchBy !== null && searchBy !== "" ){
            this.updateFilterByUrl(CHANGE_SEARCH_FILTERS, searchBy);
        }

        if( sortBy !== undefined && sortBy !== null && sortBy !== "" ){
            this.updateFilterByUrl(CHANGE_NAVIGATION_FILTERS, sortBy);
        }
        const {navigationFilters, queryString, searchFilters, updateMovies} = this.props;
        updateMovies(navigationFilters, queryString, searchFilters);
    }

    updateFilterByUrl(type, query){
         const {navigationFilters, searchFilters, updateFilterButtons} = this.props;

         if (type === CHANGE_NAVIGATION_FILTERS){
            const navigationButtons = navigationFilters.buttonList.map(button => { return {...button, checked: (button.field === query)}})
            updateFilterButtons(type, navigationButtons)
         }

         if (type === CHANGE_SEARCH_FILTERS){
            const searchButtons = searchFilters.buttonList.map(button => { return {...button, checked: (button.field === query)}})
            updateFilterButtons(type, searchButtons);
        }
    }

    updateFilterUrl(filter, query)
    {
        const params = new URLSearchParams(this.props.location.search);
        params.set(filter, query);
        this.props.history.push(`?${params.toString()}`);
    }  
    
    componentDidUpdate(prevProps){
        const {navigationFilters, queryString, searchFilters, updateMovies} = this.props;
        if(navigationFilters !== prevProps.navigationFilters ||
            searchFilters !== prevProps.searchFilters ||
            queryString !== prevProps.queryString) {

            updateMovies(navigationFilters, queryString, searchFilters);
            const params = new URLSearchParams(this.props.location.search);
            params.set("sortBy", navigationFilters.buttonList.find(button => button.checked === true).field)
            params.set("searchBy", searchFilters.buttonList.find(button => button.checked === true).field)
            this.props.history.push(`?${params.toString()}`);
        }
     }

    handleChange(event){
        this.setState({query: event.target.value});
    }

    render(){
        return(
        <>
            <Header>
                <Logo/>
                <Search/>
            </Header>
            <Box>
                {/* <p>{0} movie found</p> */}
                <SearchNavigation/>
            </Box>
            <Main/>
            <Footer>
                <Box>
                <Logo/>
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
        updateFilterButtons: (type, buttons) => dispatch(updateFilters(type, buttons)),
        updateMovies: (navigationFilters, queryString, searchFilters) => dispatch(updateMovieList(navigationFilters, queryString, searchFilters))
    }
   }  

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchPage));