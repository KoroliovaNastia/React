import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
//import swaggerClient from 'redux-swagger-client'
//import thunk from 'redux-thunk'

const store = createStore(
      rootReducer
    //,
    //  applyMiddleware([
    //    thunk,
    //    swaggerClient({url:' https://reactjs-cdp.herokuapp.com/'})
    //  ])
  );

  export default store