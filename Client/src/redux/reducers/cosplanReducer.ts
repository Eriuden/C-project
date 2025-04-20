import { GET_COSPLAN, UPDATE_COSPLAN, DELETE_COSPLAN } from "../actions/cosplan.action"

const initialState:any = {}

export const cosplanReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case GET_COSPLAN :
      return action.payload 
    
      case UPDATE_COSPLAN:
        return state.map((cosplan:any) => {
           if (cosplan.id === action.payload.cosplanId) {
               return {
                   ...cosplan,
                   name: action.payload.name,
                   licence: action.payload.licence,
                   budget: action.paylaod.budget
               }
           } else return cosplan
        })
        
      case DELETE_COSPLAN:
        return state.filter((cosplan:any) => cosplan._id !== action.payload.cosplanId)

    default:
        return state
  }
}
