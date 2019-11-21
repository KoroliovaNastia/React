import React, { Component } from 'react';
import FilterButton from './filterButton';

class Filter extends Component{
    render(){
        const { title, buttons } = this.props;
        let style = {
            textTransform: "uppercase",
            fontSize: "16px",
            color: "fff important!",
            display: "inline-block"
        }
        let formStyle = {
            display: "inline-block",
            marginLeft: "10px"
        }
        return(
            <>
                <div style={style}>
                    <p>{title}</p>
                </div>
                <div style={formStyle}>
                    {buttons.map((button) => <FilterButton key={button.id} data={button}/> )}
                </div>
            </>
        )
    }
}

export default Filter