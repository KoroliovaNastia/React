import React, { Component } from 'react';
import FilterButton from './filterButton';
import { connect } from 'react-redux';
import { updateFilters } from "../redux/actions/";
import { getMovies} from "../redux/actions/get";
import { withRouter } from 'react-router-dom'
import {CHANGE_NAVIGATION_FILTERS, CHANGE_SEARCH_FILTERS} from "../redux/constants/action-types"

class Filter extends Component{
    constructor(props){
        super(props);
        this.toggleChange = this.toggleChange.bind(this)
        this.updateFilterUrl = this.updateFilterUrl.bind(this)
    }

    updateFilterByUrl(query){
        const {type, buttons, updateFilterButtons} = this.props;
        const newButtons = buttons.map(button => { return {...button, checked: (button.field === query)}})
        updateFilterButtons(type, newButtons)
    }

    toggleChange(checkedButton){

        const {type, updateFilterButtons, buttons} = this.props;
        const newButtons = buttons.map(button => { return {...button, checked: (button.id === checkedButton.id)}})
        updateFilterButtons(type, newButtons)
      }

    updateFilterUrl(button)
    {
        const {type} = this.props;
        const params = new URLSearchParams(this.props.location.search);
        if(type === CHANGE_SEARCH_FILTERS){
            params.set("searchBy", button.field);
        }
        if(type === CHANGE_NAVIGATION_FILTERS){
            params.set("sortBy", button.field)
        }

        this.props.history.push(`?${params.toString()}`);
    }  

    render(){
        const {title, buttons} = this.props;
        let style = {
            textTransform: "uppercase",
            fontSize: "16px",
            color: "fff important!",
            display: "inline-block"
        }
        let formStyle = {
            display: "inline-block",
            marginLeft: "10px"
        }
        return(
            <div className="filter-container">
                <div style={style}>
                    <p>{title}</p>
                </div>
                <div style={formStyle}>
                    {buttons.map((button) => <FilterButton key={button.id} data={button} toggleChange={this.toggleChange}/>)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {
      searchFilters: store.filterState.searchFilterInfo,
      navigationFilters: store.filterState.navigationFilterInfo,
      query: store.filterState.query
    };
  }

function mapDispatchToProps(dispatch) {
    return {
        updateFilterButtons: (type, buttons) => dispatch(updateFilters(type, buttons)),
        getMovieList: (query, sortBy, searchBy, filter) => getMovies(query, sortBy, searchBy, filter, dispatch),
    }
   }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Filter))