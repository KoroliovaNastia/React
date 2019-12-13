import React, { Component} from "react";
import Filter from './filter';
import {connect} from 'react-redux';
import {changeQuery} from "../redux/actions"

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
        const {searchButtonText, filterInfo:{title, buttonList, type}} = this.props;
        const {query} = this.state;
        return (
            <>
                <div>
                    <input type="search" placeholder="SEARCH" value={query} onChange={this.handleChange}/>
                    <button data-cy="search" onClick={this.onSearchClick}>{searchButtonText}</button>
                </div>
                <div>
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