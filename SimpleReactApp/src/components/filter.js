import React, { Component } from 'react';
import FilterButton from './filterButton';
import { connect } from 'react-redux';
import { updateFilters } from "../redux/actions/";
import { getMovies, updateMovieList } from "../redux/actions/get";
import { withRouter } from 'react-router-dom'

class Filter extends Component{
    constructor(props){
        super(props);
        this.toggleChange = this.toggleChange.bind(this)
    }

    componentDidMount(){
        const params = new URLSearchParams(this.props.location.search);
        const searchBy = params.get('searchBy');
        const sortBy = params.get('sortBy');

        const {navigationFilters, searchFilters} = this.props.
        //if(sortBy !== null && )

        //const sortOrder = params.get('sortOrder');
        //const {navigationFilters, query, searchFilters} = this.props;
        //updateMovieList(navigationFilters, query, searchFilters);
    }

    componentDidUpdate(prevProps){
        const {navigationFilters, query, searchFilters} = this.props;
        if(navigationFilters !== prevProps.navigationFilters ||
            searchFilters !== prevProps.searchFilters){
                updateMovieList(navigationFilters, query, searchFilters);
            }
    }

    toggleChange(checkedButton){

        const {type, updateFilterButtons, buttons} = this.props;
        const newButtons = buttons.map(button => { return {...button, checked: (button.id === checkedButton.id)}})
        updateFilterButtons(type, newButtons)

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