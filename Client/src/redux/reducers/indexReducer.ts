import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cosplanReducer } from "./cosplanReducer";
import { errorReducer } from "./error.reducer";

export const reducers = combineReducers({
    userReducer,
    cosplanReducer,
    errorReducer
})