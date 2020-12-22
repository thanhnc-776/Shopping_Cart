import * as types from "../constants/ActionTypes";

let myReducer = (state = 0, action) => {
    switch(action.types) {
        case types.QUANTITY:    
            return state + 1;
        default:
            return state;
    }   
}

export default myReducer;