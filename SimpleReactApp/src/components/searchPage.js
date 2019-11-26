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
    }

    render(){
        const {logo, searchButtonText, movieList, onSearchClick, handleChange, updateFilterButtons, sortParam} = this.props;
        const {searchFilterInfo, navigationFilterInfo} = this.props.filters

        return(
        <>
            <Header>
                <Logo logo = {logo}/>
                <Search filterInfo={searchFilterInfo} searchButtonText={searchButtonText} movieList={movieList} onSearchClick={onSearchClick} handleChange={handleChange} updateFilterButtons={updateFilterButtons}/>
            </Header>
            <Box>
                <p>{movieList.length} movie found</p>
                <SearchNavigation filterInfo={navigationFilterInfo} updateFilterButtons={updateFilterButtons}/>
            </Box>
            <Main movieList={movieList} sortParam={sortParam}/>
            <Footer>
                <Box>
                <Logo logo = {logo}/>
                </Box>
            </Footer>
        </>
    )}
}

export default SearchPage