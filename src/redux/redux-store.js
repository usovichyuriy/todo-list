import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./authReducer";
import taskListReducer from "./taskListReducer";

let reducers = combineReducers({
    taskLists: taskListReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;