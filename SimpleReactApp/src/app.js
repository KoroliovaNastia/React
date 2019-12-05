import React from "react";
import ReactDOM from "react-dom";
import Root from "../src/components/root";
import store from "./redux/store";
import {Provider} from "react-redux";

//const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>
  , 
  document.getElementById("root"));
