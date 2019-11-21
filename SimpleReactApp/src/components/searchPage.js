import React from "react";
import Footer from './footer';
import Main from './main';
import Logo from './logo';
import Header from './header';
import Search from './search';
import SearchNavigation from './searchNavigation';
import Box from './box';

const SearchPage = ({logo, movieList}) => 
    <>
        <Header>
            <Logo logo = {logo}/>
            <Search/>
            <Box>
                <SearchNavigation/>
            </Box>
        </Header>
        <Main movieList={movieList}/>
        <Footer>
            <Box>
            <Logo logo = {logo}/>
            </Box>
        </Footer>
    </>

export default SearchPage