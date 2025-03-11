import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cosplanReducer } from "./cosplanReducer";

export const reducers = combineReducers({
    userReducer,
    cosplanReducer
})