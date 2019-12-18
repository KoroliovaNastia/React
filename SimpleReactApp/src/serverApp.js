import React from "react";
import ReactDOM, {hydrate} from "react-dom";
import Root from "../src/components/root";
import {configureStore} from "./redux/store";
import {Provider} from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/redux/reducers/index";
import {StaticRouter} from 'react-router-dom';

//const preloadedState = window.__PRELOADED_STATE__
 //   delete window.__PRELOADED_STATE__

    const store = configureStore(window.PRELOADED_STATE)
//ReactDOM.render(
  hydrate(
  <Provider store={store}>
    <Root  Router={StaticRouter}/>
  </Provider>
  , 
  document.getElementById("root"));