import { GET_COSPLANS_ERRORS } from "../actions/cosplan.action";

const initialState = {userError : [], cosplanError : []}

export const errorReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case GET_COSPLANS_ERRORS:
            return {
                cosplanError: action.payload
            }
   
        default:
            return state
    }
}