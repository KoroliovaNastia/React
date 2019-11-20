import React, { Component } from "react"

class FilterButton extends Component {
    render(){
        const {text, checked} = this.props.data;
        return (
            <label>
                <input /*className={[logoStyle().button, logoStyle().filterButton].join(' ')}*/ type='button' value={text} checked={checked}/>
            </label>
        );
    }
};

export default FilterButton