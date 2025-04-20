import { GET_ALL_COSPLANS } from "../actions/cosplan.action";

const initialState:any = {}

export const cosplansReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ALL_COSPLANS :
            return action.payload
    
        default:
            return state;
    }
}