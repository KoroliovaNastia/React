import React, { Component} from "react";
import Filter from './filter';

export default class SearchNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTitle: "sort by",
            buttonList: [{id: "b1", text: "Release date", checked: "true"}, {id: "b2", text: "rating", checked: "false"}]
        }
    }
    render(){
        const {searchTitle, buttonList} = this.state
        return (
            <Filter title={searchTitle} buttons = {buttonList}/>
        )
    }
};