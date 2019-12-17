import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key:'movieReducer',
  storage: storage,
  whitelist: ['movieReducer']
}

const pReducer = persistReducer(persistConfig, rootReducer);
const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__
export const store = createStore(
    pReducer,
    applyMiddleware(thunk),
    preloadedState
);

export const persistor = persistStore(store);