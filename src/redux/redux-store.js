import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import securityReducer from "./securityReducer";
import taskListReducer from "./taskListReducer";

let reducers = combineReducers({
  taskLists: taskListReducer,
  auth: authReducer,
  security: securityReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
