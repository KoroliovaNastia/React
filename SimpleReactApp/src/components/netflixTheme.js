import React, { Component } from 'react';
import {createUseStyles} from 'react-jss';

var logoStyle = createUseStyles({
    logo: {
        color: '#f65261',
        paddingTop: '16px',
        fontSize: '20px',
        textAlign: "center",
        '& span': {
            fontFamily:'Arial Black'
        }
    },
    button: {
        backgroundColor: "#424242",
        border: "none",
        display: "inline-block",
        textTransform: "uppercase"
    },
    searchButon: {
        backgroundColor: "#f65261",
        borderRadius: "3px",
        padding: "10px 45px",
        fontSize: "16px"
    },
    filterButton: {
        fontSize: "13px",
        padding:"10px 30px",
        '&:checked': {
            backgroundColor: "#424242"
        },
        '&:hover': {
            backgroundColor: "#f65261"
        }
    }
});

export const Button = () => {
    const classes = logoStyle();
    return(<button className={[classes.button, classes.searchButon].join(' ')} type="reset">Serach</button>)
};

export default class Box extends Component{
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