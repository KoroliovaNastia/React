import React, { Component} from "react";
import Filter from './filter';
import FilterButton from './filterButton';

export default class SearchNavigation extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTitle: "sort by",
            buttonList: [{id: "b1", text: "Release date", checked: "true"}, {id: "b2", text: "rating", checked: "false"}]
        }
    }
    render(){
        return (
            <Filter title={this.state.searchTitle} buttons = {this.state.buttonList.map((button) => <FilterButton key={button.id} data={button}/> )}/>
        )
    }
};