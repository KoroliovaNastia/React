import React, { Component} from "react";
import Filter from './filter';
import {connect} from 'react-redux';

class SearchNavigation extends Component {
    render(){
        const {filterInfo:{title, buttonList, type}} = this.props;
        return (
            <Filter title={title} buttons={buttonList} type={type}/>
        )
    }
};

function mapStateToProps(store) {
    return {
        filterInfo: store.filterState.navigationFilterInfo,
    };
  }

  export default connect(mapStateToProps)(SearchNavigation)