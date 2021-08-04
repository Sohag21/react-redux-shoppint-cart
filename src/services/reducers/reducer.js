import {ActionTypes} from '../constants/actionTypes'
const initialState = {
    product: []
};

export default function productItems(state = [], action){
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            // console.warn("reducer", action)
            return[
                ...state,
               { product:action.data}
            ]

        case ActionTypes.REMOVE_TO_CART:
            // console.warn("reducer", action)
            state.pop();
            return[
                ...state,
            ]
    
        default:
            return state;
    }
}