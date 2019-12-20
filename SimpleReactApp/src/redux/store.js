import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';


const persistConfig = {
  key: 'movieReducer',
  storage,
  whitelist: ['movieReducer'],
};

const pReducer = persistReducer(persistConfig, rootReducer);

export function configureStore(preloadedState) {
  const store = createStore(
    pReducer,
    preloadedState,
    applyMiddleware(thunk),
  );

  return store;
}

export const persistor = persistStore(configureStore());
