import React, { Component } from 'react';
import FilterButton from './filterButton';
import { connect } from 'react-redux';
import { updateFilters } from "../redux/actions/";

class Filter extends Component{
    constructor(props){
        super(props);
        this.toggleChange = this.toggleChange.bind(this)
    }
    
    toggleChange(checkedButton){

        const {type, updateFilterButtons, buttons} = this.props;
        const newButtons = buttons.map(button => { return {...button, checked: (button.id === checkedButton.id)}})
        updateFilterButtons(type, newButtons)
    }

    render(){
        const {title, buttons} = this.props;

        return(
            <div className="filter-container">
                <div>
                    <p>{title}</p>
                </div>
                <div>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)