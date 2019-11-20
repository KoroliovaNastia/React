import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import Footer from './components/footer';
import Main from './components/main';
import Logo from './components/logo';
import Header from './components/header';
import Search from './components/search';
import SearchNavigation from './components/searchNavigation';
import Box from './components/netflixTheme';

import '../src/css/main.css';

class Root extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <>
        <Header>
          <Logo />
          <Search/>
          <Box>
            <SearchNavigation/>
          </Box>
        </Header>
        <Main />
        <Footer>
          <Box>
            <Logo/>
          </Box>
        </Footer>
      </>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
