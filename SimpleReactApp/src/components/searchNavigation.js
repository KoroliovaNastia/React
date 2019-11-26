import React, { Component} from "react";
import Filter from './filter';

export default class SearchNavigation extends Component {
    render(){
        const {title, buttonList, type} = this.props.filterInfo;
        const {updateFilterButtons} = this.props;
        return (
            <Filter title={title} buttons={buttonList} type={type} updateFilterButtons={updateFilterButtons}/>
        )
    }
};