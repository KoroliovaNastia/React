import React, { Component } from "react"

class FilterButton extends Component {
    render(){
        const {data, data:{text, checked}, toggleChange} = this.props;
        return (
            <label>
                <input /*className={[logoStyle().button, logoStyle().filterButton].join(' ')}*/ type='checkbox' data-cy={text} checked={checked === true} onChange={() => toggleChange(data)}/>
                {text}
            </label>
        );
    }
};

export default FilterButton