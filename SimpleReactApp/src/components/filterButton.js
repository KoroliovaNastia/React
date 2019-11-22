import React, { Component } from "react"

class FilterButton extends Component {
    constructor(props){
        super(props);
        this.state = {
            isChecked: props.data.checked === true
        };
    }

    render(){
        const {text} = this.props.data;
        const {isChecked} = this.state;
        return (
            <label>
                <input /*className={[logoStyle().button, logoStyle().filterButton].join(' ')}*/ type='button' value={text} defaultChecked={isChecked} onClick={() => this.props.toggleChange(this.props.data)}/>
            </label>
        );
    }
};

export default FilterButton