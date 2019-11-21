import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import Footer from './components/footer';
import Main from './components/main';
import Logo from './components/logo';
import Header from './components/header';
import Search from './components/search';
import SearchNavigation from './components/searchNavigation';
import Box from './components/box';

import '../src/css/main.css';

class Root extends Component {
  constructor(){
    super();
    this.state = {logo: 'netflixroulete'}
  }
  render() {
    return (
      <>
        <Header>
          <Logo logo = {this.state.logo}/>
          <Search/>
          <Box>
            <SearchNavigation/>
          </Box>
        </Header>
        <Main />
        <Footer>
          <Box>
            <Logo logo = {this.state.logo}/>
          </Box>
        </Footer>
      </>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
