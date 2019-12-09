import React, { Component } from 'react';
import FilterButton from './filterButton';
import { connect } from 'react-redux';
import { updateFilters } from "../redux/actions/";
import { getMovies, getCheckedFilterButton } from "../redux/actions/get";

class Filter extends Component{
    constructor(props){
        super(props);
        //this.state = {buttons : props.buttons}

        this.toggleChange = this.toggleChange.bind(this)
    }

    toggleChange(checkedButton){

        const {type, query, buttons} = this.props;
        //const {buttons} = this.state
        const newButtons = buttons.map(button => { return {...button, checked: (button.id === checkedButton.id)}})
        // this.setState({
        //         buttons: newButtons
        // });


        this.props.updateFilterButtons(type, newButtons)

        const {navigationFilterInfo, searchFilterInfo} = this.props;
        const sortBy = getCheckedFilterButton(navigationFilterInfo);
        const searchBy = getCheckedFilterButton(searchFilterInfo);
        this.props.getMovieList(/*query*/"kill", sortBy, searchBy, "")
      }

    //   updateFilterButtons(buttons, type){
    //     const {filters} = this.state;
    //     const currentState = {...filters[type], buttonList: buttons};
    //     this.setState({...filters[type] = currentState});
    //   }  

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
      searchFilterInfo: store.filterState.searchFilterInfo,
      navigationFilterInfo: store.filterState.navigationFilterInfo,
      query: store.movieState.query
    };
  }

function mapDispatchToProps(dispatch) {
    return {
        updateFilterButtons: (type, buttons) => dispatch(updateFilters(type, buttons)),
        getMovieList: (query, sortBy, searchBy, filter) => getMovies(query, sortBy, searchBy, filter, dispatch),
    }
   }

export default connect(mapStateToProps, mapDispatchToProps)(Filter)