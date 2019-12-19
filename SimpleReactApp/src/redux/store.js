import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware, {END} from 'redux-saga'
//import AsyncStorage from '@react-native-community/async-storage'


const persistConfig = {
  key:'movieReducer',
  storage: storage,
  //storage: AsyncStorage,
  whitelist: ['movieReducer']
}

const pReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();

export function configureStore(preloadedState){
  const store = createStore(
    pReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
  
  return store;
}

export const persistor = persistStore(configureStore());