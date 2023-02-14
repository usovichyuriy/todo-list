import pointReducer from "./point-reducer";
import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

let store = configureStore({reducer: pointReducer}, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;