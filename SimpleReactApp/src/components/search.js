import React, { Component} from "react";
import Image from '../images/header-image.jpg';
import {Button} from './netflixTheme';
import Filter from './filter';
import FilterButton from './filterButton';

const  searchStyle = {
    minWidth: "1200px",
    backgroundImage: 'url(' + Image + ')',
    backgroundColor: '#2323237f' 
};

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTitle: "search by",
            buttonList: [{id: "b1", text: "title", checked: "true"}, {id: "b2", text: "genre", checked: "false"}]
        }
    }
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
            <div className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light" style={searchStyle} uk-img="true">
                <div className="uk-search">
                    <input style={input} className="uk-search-field" type="search" placeholder="SEARCH"/>
                    <Button />
                </div>
                <div style={filter}>
                    <Filter title={this.state.searchTitle} buttons = {this.state.buttonList.map((button) => <FilterButton key={button.id} data={button}/> )}/>
                </div>
            </div>
        );
    }
}

export default Search