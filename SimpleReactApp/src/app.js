import React from "react";
import ReactDOM from "react-dom";
import Root from "../src/components/root";
import {configureStore, persistor} from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root Router={BrowserRouter}/>
    </PersistGate>
  </Provider>
  , 
  document.getElementById("root"));
