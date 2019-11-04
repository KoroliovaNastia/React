import React from "react";
import ReactDOM from "react-dom";

class Title extends React.PureComponent {
    render(){
      return <h1>Hello World!</h1>
    }
  }
  
  const subTitle = name => (<h2>Dear {name}, welcome to your first React application</h2>);
  
  class User extends React.Component {
      render() {
          return <span>User: {this.props.firstName} {this.props.lastName}</span>;
      }
  }
  
  const userData = <User firstName="Nastia" lastName="Karaliova"/>
  const main = React.createElement("div", null, subTitle("Nastia"), userData);
  
  ReactDOM.render(<Title />, document.getElementById('root'));
  ReactDOM.render(main, document.getElementById('body'));
