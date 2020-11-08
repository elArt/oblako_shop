import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import shishaReducer from "./shisha-reduser";


const redusers = combineReducers({
  shishaPage: shishaReducer,
});

const store = createStore(redusers, 
  compose(applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;
