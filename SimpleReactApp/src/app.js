import React from "react";
import ReactDOM, {hydrate} from "react-dom";
import Root from "../src/components/root";
import store from "./redux/store";
import {Provider} from "react-redux";

//ReactDOM.render(
  hydrate(
  <Provider store={store}>
    <Root />
  </Provider>
  , 
  document.getElementById("root"));
