import React, { Component} from "react";
import Image from './images/header-image.jpg'
import {LogoText, Button, FuilterButton} from './netfilxTheme'
const { StyleSheet } = jss;
const jss = jss.default;
jss.setup(jssPreset.default());

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

class Search extends Component {
    render() {
        return (
            <div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={searchStyle} uk-img="true">
                <form class="uk-search">
                    <input class="uk-search-field" type="search" placeholder="search..."/>
                    <Button />
                </form>
                <Filter title="search by">
                    <FuilterButton checked="true" value="title"/>
                    <FuilterButton checked="false" value="genre"/>
                </Filter>
            </div>
        );
    }
}

class SearchNavigation extends Component {
    render(){
        return (
        <div class="box">
            <Filter title="sort by">
                <FuilterButton checked="true" value="Release date"/>
                <FuilterButton checked="false" value="rating"/>
            </Filter>
        </div>
        )
    }
};

const Logo = () => (
    <div class="logo">
        <LogoText />
    </div>
    );

class Filter extends Component{
    render(){
        return(
            <form>
            <p>{this.props.title}</p>
            {this.props.children}
        </form>
        )
    }
}

export default Header