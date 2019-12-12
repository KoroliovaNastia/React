import React, { Component } from 'react';
import FilterButton from './filterButton';
import { connect } from 'react-redux';
import { updateFilters } from "../redux/actions/";
import { getMovies, updateMovieList } from "../redux/actions/get";
import { withRouter } from 'react-router-dom'
import {CHANGE_NAVIGATION_FILTERS, CHANGE_SEARCH_FILTERS} from "../redux/constants/action-types"

class Filter extends Component{
    constructor(props){
        super(props);
        this.toggleChange = this.toggleChange.bind(this)
        //this.updateFilterByUrl = this.updateFilterByUrl.bind(this)
        this.updateFilterUrl = this.updateFilterUrl.bind(this)
    }

    // componentDidMount(){
    //     const {type, buttons} = this.props;
    //     const params = new URLSearchParams(this.props.location.search);
    //     ///const filter = null;
    //     if(type === CHANGE_SEARCH_FILTERS){
    //         const filter = params.get("searchBy");
    //         if( filter !== undefined && filter !== null && filter !== "" ){
    //             this.updateFilterByUrl(filter);
    //         }
    //     }
    //     if(type === CHANGE_NAVIGATION_FILTERS){
    //         const filter = params.get("sortBy");
    //         if( filter !== undefined && filter !== null && filter !== "" ){
    //             this.updateFilterByUrl(filter);
    //         }
    //     }
    //     //this.updateFilterByUrl()
    //     //const params = new URLSearchParams(this.props.location.search);
    //     //const searchBy = params.get('searchBy');
    //     //const sortBy = params.get('sortBy');

    //     //const {navigationFilters, searchFilters} = this.props.
    //     //if(sortBy !== null && )

    //     //const sortOrder = params.get('sortOrder');
    //     //const {navigationFilters, query, searchFilters} = this.props;
    //     //updateMovieList(navigationFilters, query, searchFilters);
    // }

    updateFilterByUrl(query){
        const {type, buttons, updateFilterButtons} = this.props;
        const newButtons = buttons.map(button => { return {...button, checked: (button.field === query)}})
        updateFilterButtons(type, newButtons)
    }

    // componentDidUpdate(prevProps){
    //     const {buttons, navigationFilters, query, searchFilters} = this.props;
    //     if(navigationFilters !== prevProps.navigationFilters ||
    //         searchFilters !== prevProps.searchFilters){
    //             updateMovieList(navigationFilters, query, searchFilters);

    //             // const params = new URLSearchParams(this.props.location.search);
    //             // ///const filter = null;
    //             // if(type === CHANGE_SEARCH_FILTERS){
    //             //     const filter = params.get("searchBy");
    //             //     if( filter !== undefined && filter !== null && filter !== "" ){
    //             //         this.updateFilterByUrl(filter);
    //             //     }
    //             // }
    //             // if(type === CHANGE_NAVIGATION_FILTERS){
    //             //     const filter = params.get("sortBy");
    //             //     if( filter !== undefined && filter !== null && filter !== "" ){
    //             //         this.updateFilterByUrl(filter);
    //             //     }
    //             // }
    //            // this.updateFilterUrl(buttons.find(button => button.checked === true))
    //         }
    // }

    toggleChange(checkedButton){

        const {type, updateFilterButtons, buttons} = this.props;
        const newButtons = buttons.map(button => { return {...button, checked: (button.id === checkedButton.id)}})
        updateFilterButtons(type, newButtons)
        //this.updateFilterUrl(newButtons.find(button => button.checked === true))
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
        // const params = new URLSearchParams(this.props.location.search);
        // const searchBy = params.get('searchBy');
        // const sortBy = params.get('sortBy');

        // const {navigationFilters, searchFilters} = this.props.
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