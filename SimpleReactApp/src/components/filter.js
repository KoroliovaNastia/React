import React, { Component } from 'react';
import FilterButton from './filterButton';

class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {buttons : props.buttons}

        this.toggleChange = this.toggleChange.bind(this)
    }
    toggleChange(checkedButton){

        const {type} = this.props;
        const {buttons} = this.state
        const newButtons = buttons.map(button => { return {...button, checked: (button.id === checkedButton.id)}})
        this.setState({
                buttons: newButtons
        });

        this.props.updateFilterButtons(newButtons, type)
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
                    {buttons.map((button) => <FilterButton key={button.id} data={button} toggleChange={this.toggleChange}/>)}
                </div>
            </>
        )
    }
}

export default Filter