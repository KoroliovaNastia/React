import React, { Component } from "react"

class FilterButton extends Component {
    render(){
        const {text, checked} = this.props.data;
        return (
            <label>
                <input /*className={[logoStyle().button, logoStyle().filterButton].join(' ')}*/ type='checkbox' value={text} checked={checked === true} onChange={() => this.props.toggleChange(this.props.data)}/>
            </label>
        );
    }
};

export default FilterButton