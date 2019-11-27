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
            query: ""
        },

        this.onSearchClick = this.onSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSearchClick(){
        const {query, movieList, filters: {searchFilterInfo}} = {...this.state};
        const {getCheckedFilterButton, filterMoviesByParamAndQuery} = this.props;
        var updatedList = movieList;
    
        var currentFilter = getCheckedFilterButton(searchFilterInfo);
    
        updatedList = filterMoviesByParamAndQuery(updatedList, currentFilter, query);
        this.setState({movieList: updatedList});
      }

    handleChange(){
    this.setState({query: event.target.value});
    }

    sortMovies(sortParam){
        const {movieList} = this.props;
        let param = sortParam.replace(' ', '_').toLowerCase();
        const sortedMovies = movieList.sort((a, b) => a[param] < b[param]);
        return sortedMovies
    }

    render(){
        const {logo, searchButtonText, updateFilterButtons} = this.props;
        const {searchFilterInfo, navigationFilterInfo} = this.props.filters

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