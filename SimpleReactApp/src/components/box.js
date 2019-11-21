import React, { Component } from 'react';

class Box extends Component{
    render(){
        const {children} = this.props;
        let box = {
            backgroundColor: "#555555",
            height: "65px"
        }
        return(
        <div style={box}>
            {children}
        </div>
        )
    }
};

export default Box