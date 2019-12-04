import React from "react";
import ReactDOM from "react-dom";
import Root from "../src/components/root";
import store from "../src/redux/store"


ReactDOM.render(
  <Provider store="{store}">
    <Root />
  </Provider>, 
  document.getElementById("root"));
