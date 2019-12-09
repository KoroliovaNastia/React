import React, { Component} from "react";
import Filter from './filter';
import {connect} from 'react-redux';

class SearchNavigation extends Component {
    render(){
        const {updateFilterButtons, filterInfo:{title, buttonList, type}} = this.props;
        return (
            <Filter title={title} buttons={buttonList} type={type} updateFilterButtons={updateFilterButtons}/>
        )
    }
};

function mapStateToProps(store) {
    return {
        filterInfo: store.filterState.navigationFilterInfo,
    };
  }

  export default connect(mapStateToProps)(SearchNavigation)