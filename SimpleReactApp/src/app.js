import React from "react";
import ReactDOM from "react-dom";
import Root from "../src/components/root";
import {store, persistor} from "./redux/store";
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root />
    </PersistGate>
  </Provider>
  , 
  document.getElementById("root"));
