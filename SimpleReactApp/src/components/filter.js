import React, { Component } from 'react';

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
                    {buttons}
                </div>
            </>
        )
    }
}

export default Filter