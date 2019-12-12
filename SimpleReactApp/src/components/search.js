import React, { Component} from "react";
import Filter from './filter';
import {connect} from 'react-redux';
import {changeQuery} from "../redux/actions"


const ENTER_KEY = 13;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            query: "",
        }
        this.onSearchClick = this.onSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({query: event.target.value});
    }

    onSearchClick(){
        const {getQuery} = this.props;
        getQuery(this.state.query);
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

        const {searchButtonText, updateFilterButtons, filterInfo:{title, buttonList, type}} = this.props;
        const {query} = this.state;
        return (
            <>
                <div className="uk-search">
                    <input style={input} className="uk-search-field" type="search" placeholder="SEARCH" value={query} onChange={this.handleChange}/>
                    <button className="search-button" data-cy="search" onClick={this.onSearchClick}>{searchButtonText}</button>
                </div>
                <div style={filter}>
                    <Filter title={title} buttons={buttonList} type={type}/>
                </div>
            </>
        );
    }
}

function mapStateToProps(store) {
    return {
        filterInfo: store.filterState.searchFilterInfo,
        query: store.filterState.query,
        searchButtonText: store.appState.searchButtonText
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        getQuery: currentQuery => dispatch(changeQuery(currentQuery))
    }
   }  

export default connect(mapStateToProps, mapDispatchToProps)(Search)