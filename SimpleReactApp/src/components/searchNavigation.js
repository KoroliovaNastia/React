import React, { Component} from "react";
import Filter from './filter';

export default class SearchNavigation extends Component {
    render(){
        const {title, buttonList} = this.props.filterInfo
        return (
            <Filter title={title} buttons = {buttonList}/>
        )
    }
};