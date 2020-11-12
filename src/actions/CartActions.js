import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, SUBTRACT_QUANTITY } from '../types';

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item
  }
}

export const removeFromCart = ({ id, spray }) => {
  return {
    type: REMOVE_FROM_CART,
    payload: { id, spray }
  }
}

export const subtractQuantity = ({ id, spray }) => {
  return {
    type: SUBTRACT_QUANTITY,
    payload: { id, spray }
  }
}

export const addQuantity = ({ id, spray }) => {
  return {
    type: ADD_QUANTITY,
    payload: { id, spray }
  }
}
