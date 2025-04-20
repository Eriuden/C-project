import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cosplanReducer } from "./cosplanReducer";
import { cosplansReducer } from "./cosplansReducer";
import { errorReducer } from "./error.reducer";

export const reducers = combineReducers({
    userReducer,
    cosplanReducer,
    cosplansReducer,
    errorReducer
})