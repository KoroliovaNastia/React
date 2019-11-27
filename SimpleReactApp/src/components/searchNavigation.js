import React, { Component} from "react";
import Filter from './filter';

export default class SearchNavigation extends Component {
    render(){
        const {updateFilterButtons, filterInfo:{title, buttonList, type}} = this.props;
        return (
            <Filter title={title} buttons={buttonList} type={type} updateFilterButtons={updateFilterButtons}/>
        )
    }
};