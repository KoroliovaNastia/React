import React from "react";
import ReactDOM, {hydrate} from "react-dom";
import Root from "../src/components/root";
//import store from "./redux/store";
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/redux/reducers/index";

//let preloadedState

    // if (typeof window !== 'undefined') {
    const preloadedState = window.__PRELOADED_STATE__
    delete window.__PRELOADED_STATE__

    const store = createStore(rootReducer, preloadedState)

//ReactDOM.render(
  hydrate(
  <Provider store={store}>
    <Root />
  </Provider>
  , 
  document.getElementById("root"));
