import React, { Component } from 'react';

class Box extends Component{
    render(){
        const {children} = this.props;
        return(
        <div>
            {children}
        </div>
        )
    }
};

export default Box