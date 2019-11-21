import React, { Component } from 'react';

class Box extends Component{
    render(){
        let box = {
            backgroundColor: "#555555",
            height: "65px"
        }
        return(
        <div style={box}>
            {this.props.children}
        </div>
        )
    }
};

export default Box