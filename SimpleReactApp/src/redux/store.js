import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import { AsyncResource } from "async_hooks";


const persistConfig = {
  key:'movieReducer',
  storage: storage,
  whitelist: ['movieReducer']
}

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    pReducer,
    applyMiddleware(thunk, autoRehydrate)
);

const persistor = persistStore(store/*, { storage: AsyncResource}*/);
export default {persistor,  store}