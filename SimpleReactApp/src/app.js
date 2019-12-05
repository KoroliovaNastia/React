import React from "react";
import ReactDOM from "react-dom";
import Root from "../src/components/root";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers"

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>
  , 
  document.getElementById("root"));
