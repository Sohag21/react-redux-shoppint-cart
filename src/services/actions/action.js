import { ActionTypes } from '../constants/actionTypes'
export const addToCart = (data) => {
    // console.warn("actions", data)
    return {
        type: ActionTypes.ADD_TO_CART,
        data:data
    }
}

export const removeToCart = (data) => {
    return {
        type: ActionTypes.REMOVE_TO_CART,
    }
}