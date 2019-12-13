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


class SearchPage extends Component {
    constructor(props){
        super(props);

        this.updateFilterByUrl = this.updateFilterByUrl.bind(this);
        this.updateFilterUrl = this.updateFilterUrl.bind(this);
    }

    componentDidMount(){
        const {navigationFilters, searchFilters, queryString, updateMovies} = this.props;
        const params = new URLSearchParams(this.props.location.search);
        const query = params.get('query');
        if (query !== null){
            this.props.getQuery(query);
        }
        const searchBy = params.get("searchBy");
        const sortBy = params.get("sortBy");
        if( searchBy !== undefined && searchBy !== null && searchBy !== "" ){
            this.updateFilterByUrl(searchFilters, searchBy);
        }

        if( sortBy !== undefined && sortBy !== null && sortBy !== "" ){
            this.updateFilterByUrl(navigationFilters, sortBy);
        }

        updateMovies(navigationFilters, queryString, searchFilters);
    }

    updateFilterByUrl(filterButtons, query){
        const {updateFilterButtons} = this.props;
        const updatedButtons = filterButtons.buttonList.map(button => { return {...button, checked: (button.field === query)}})
        updateFilterButtons(filterButtons.type, updatedButtons)
    }

    updateFilterUrl(params, querySet)
    {
        querySet.forEach(element => {
            params.set(element.filter, element.query)
        });

        this.props.history.push(`?${params.toString()}`);
    }  
    
    componentDidUpdate(prevProps){
        const {navigationFilters, queryString, searchFilters, updateMovies} = this.props;
        if(navigationFilters !== prevProps.navigationFilters ||
            searchFilters !== prevProps.searchFilters ||
            queryString !== prevProps.queryString) {

            updateMovies(navigationFilters, queryString, searchFilters);
            const params = new URLSearchParams(this.props.location.search);
            const querySet = [{filter: "sortBy", query: navigationFilters.buttonList.find(button => button.checked === true).field},
                              {filter: "searchBy", query: searchFilters.buttonList.find(button => button.checked === true).field}]

            this.updateFilterUrl(params, querySet);
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