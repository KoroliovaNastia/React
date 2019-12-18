import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import {persistReducer, persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware, {END} from 'redux-saga'
import {rootSaga} from "../redux/actions/get"
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
    applyMiddleware(sagaMiddleware)
  )

  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END)
  
  return store;
}

// export const store = createStore(
//     pReducer,
//     applyMiddleware(thunk)
// );

export const persistor = persistStore(configureStore());