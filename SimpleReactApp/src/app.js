import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
//import User from '../src/user';
import Header from '../src/header';
import Footer from '../src/footer';
import Main from '../src/main';

import '../src/css/main.css';

/*class Title extends PureComponent {
  render() {
    return <h1>Hello World!</h1>;
  }
}

const SubTitle = ({ name }) => (
  <h2>Dear {name}, welcome to your first React application!!</h2>
);


const Main = () => (
  <>
    <SubTitle name="Nastia" />
    <User firstName="Nastia" lastName="Koroliova" />
  </>
);*/

class Root extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
