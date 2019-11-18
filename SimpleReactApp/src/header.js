import React, { Component} from "react";
import Image from './images/header-image.jpg'
import Theme, {LogoText, Button} from './netfilxTheme'

const Header = () => (
    <>
        <Logo />
        <Search></Search>
        <SearchNavigation></SearchNavigation>
    </>
)

var searchStyle = {
    minWidth: "1200px",
    backgroundImage: 'url(' + Image + ')',
    backgroundColor: '#2323237f' 
};

var searchInput = {
    
};

class Search extends Component {
    render() {
        return (
            <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={searchStyle} uk-img="true">
                <form class="uk-search">
                    <input class="uk-search-field" type="search" placeholder="search..."/>
                    <Button />
                </form>
            </div>
        );
    }
}

class SearchNavigation extends Component {
    render(){
        return (
        <div class="box">
        </div>)
    }
};

const Logo = () => (
    <div class="logo">
        <LogoText />
    </div>
    );

/*const SearchBox = (searchMove) => (
        <input class="uk-search-field" type="search" placeholder="search..."/>
        <button class="uk-search-close" type="reset"></button> );
*/
export default Header