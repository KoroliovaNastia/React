import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore, persistor } from './redux/store';
import Root from './components/root';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Root Router={BrowserRouter} />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
