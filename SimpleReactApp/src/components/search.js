import React, { Component} from "react";
import Button from './button';
import Filter from './filter';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTitle: "search by",
            buttonList: [{id: "b1", text: "title", checked: "true"}, {id: "b2", text: "genre", checked: "false"}],
            searchButtonText : "Search"
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

        const {searchTitle, buttonList, searchButtonText} = this.props.filterInfo
        return (
            <>
                <div className="uk-search">
                    <input style={input} className="uk-search-field" type="search" placeholder="SEARCH"/>
                    <button>{searchButtonText}</button>
                </div>
                <div style={filter}>
                    <Filter title={searchTitle} buttons = {buttonList}/>
                </div>
            </>
        );
    }
}

export default Search