import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";

class Title extends PureComponent {
  render() {
    return <h1>Hello World!</h1>;
  }
}

const SubTitle = ({ name }) => (
  <h2>Dear {name}, welcome to your first React application</h2>
);

class User extends Component {
  render() {
    const { firstName, lastName } = this.props;
    return (
      <span>
        User: {firstName} {lastName}
      </span>
    );
  }
}

const Main = () => (
  <>
    <SubTitle name="Nastia" />
    <User firstName="Nastia" lastName="Koroliova" />
  </>
);

class Root extends Component {
  render() {
    return (
      <>
        <Title />
        <Main />
      </>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
