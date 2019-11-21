import React from "react";
import Footer from './footer';
import Main from './main';
import Logo from './logo';
import Header from './header';
import Search from './search';
import SearchNavigation from './searchNavigation';
import Box from './box';

const SearchPage = ({logo, movieList, filters}) => {
    const {searchFilterInfo, navigationFilterInfo} = filters
    return(
    <>
        <Header>
            <Logo logo = {logo}/>
            <Search filterInfo={searchFilterInfo}/>
        </Header>
        <Box>
            <p>{movieList.length} movie found</p>
            <SearchNavigation filterInfo={navigationFilterInfo}/>
        </Box>
        <Main movieList={movieList}/>
        <Footer>
            <Box>
            <Logo logo = {logo}/>
            </Box>
        </Footer>
    </>
    )
}

export default SearchPage