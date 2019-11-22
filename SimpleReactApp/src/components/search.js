import React, { Component} from "react";
import Button from './button';
import Filter from './filter';

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

        const {title, buttonList} = this.props.filterInfo;
        const {searchButtonText} = this.props;
        return (
            <>
                <div className="uk-search">
                    <input style={input} className="uk-search-field" type="search" placeholder="SEARCH"/>
                    <button>{searchButtonText}</button>
                </div>
                <div style={filter}>
                    <Filter title={title} buttons = {buttonList}/>
                </div>
            </>
        );
    }
}

export default Search