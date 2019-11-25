import React, { Component } from 'react';
import FilterButton from './filterButton';

class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {buttons : props.buttons}
    }
    toggleChange(checkedButton){
        this.setState({
            buttons : this.state.buttons.map(button => this.updateButton(button, checkedButton))
        });
      }
    updateButton(button, checkedButton){
        return {id: button.id, text: button.text, checked: (button.id === checkedButton.id)}
    }  
    render(){
        const {title} = this.props;
        const {buttons} = this.state;
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
                    {buttons.map((button) => <FilterButton key={button.id} data={button} toggleChange={this.toggleChange.bind(this)}/>)}
                </div>
            </>
        )
    }
}

export default Filter