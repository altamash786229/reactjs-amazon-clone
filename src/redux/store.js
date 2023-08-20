import { cartReducer } from "./cartReducer";
import { userReducer } from "./userReducer";
import { createStore, combineReducers } from "redux";

const store = createStore(combineReducers({ cartReducer, userReducer }));

export default store;
