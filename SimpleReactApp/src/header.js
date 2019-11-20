import React, { Component} from "react";
import Image from './images/header-image.jpg'
import {LogoText, Button, FuilterButton, Box, Filter} from './netfilxTheme'

const Header = () => (
    <>
        <Logo />
        <Search></Search>
        <SearchNavigation></SearchNavigation>
    </>
)

const  searchStyle = {
    minWidth: "1200px",
    backgroundImage: 'url(' + Image + ')',
    backgroundColor: '#2323237f' 
};

class Search extends Component {
    render() {
        let input = {
            width: "600px",
            padding: "11px 45px",
            backgroundColor: "#424242",
            border: "none",
            marginRight: "10px",
            borderRadius: "3px"
        }

        let filter ={
            width: "768px",
            marginTop: "50px",
            position: "absolute"
        }
        return (
            <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={searchStyle} uk-img="true">
                <div class="uk-search">
                    <input style={input} class="uk-search-field" type="search" placeholder="SEARCH"/>
                    <Button />
                </div>
                <div style={filter}>
                    <Filter title="search by">
                        <FuilterButton checked={true} value="title"/>
                        <FuilterButton checked={false} value="genre"/>
                    </Filter>
                </div>
            </div>
        );
    }
}

class SearchNavigation extends Component {
    render(){
        return (
        <Box>
            <Filter title="sort by">
                <FuilterButton checked={true} value="Release date"/>
                <FuilterButton checked={false} value="rating"/>
            </Filter>
        </Box>
        )
    }
};

const Logo = () => (
    <div class="logo">
        <LogoText />
    </div>
    );

export default Header