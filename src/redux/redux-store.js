import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import taskListReducer from "./taskListReducer";

let reducers = combineReducers({
    taskLists: taskListReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;