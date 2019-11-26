import React, { Component} from "react";
import Filter from './filter';


const ENTER_KEY = 13;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            query: '',
            filteredMovies: this.props.movieList
        };
    }

    /*onEnterClick(event) {
        var updatedList = movieList; 
        this.props.onChangeList(updatedList);
    }*/

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

        const {title, buttonList, type} = this.props.filterInfo;
        const {searchButtonText, handleChange, onSearchClick, updateFilterButtons} = this.props;
        return (
            <>
                <div className="uk-search">
                    <input style={input} className="uk-search-field" type="search" placeholder="SEARCH" value={this.state.value} onChange={handleChange}/>
                    <button onClick={onSearchClick}>{searchButtonText}</button>
                </div>
                <div style={filter}>
                    <Filter title={title} buttons={buttonList} type={type} updateFilterButtons={updateFilterButtons}/>
                </div>
            </>
        );
    }
}

export default Search