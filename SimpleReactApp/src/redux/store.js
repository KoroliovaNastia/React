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

export const store = createStore(
    pReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);