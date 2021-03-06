import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, SUBTRACT_QUANTITY } from '../types';

const initState = {
  items: [],
  total: 0,
  cartQuantity: 0
}

const cartReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = state.items.find((item) => action.payload.id === item.id && action.payload.spray === item.spray);
      if (item) {
        const addedItem = action.payload;

        return {
          ...state,
          items: state.items.map((item) => {
            if (item.id === addedItem.id && item.spray === addedItem.spray) {
              return {
                ...item,
                quantity: item.quantity + addedItem.quantity
              }
            }
            return item
          }),
          total: state.total + addedItem.price * addedItem.quantity,
          cartQuantity: state.items.reduce((a, b) => a + b.quantity, 0) + addedItem.quantity
        }
      } else {
        const addedItem = action.payload;
        
        return {
          ...state,
          items: [...state.items, addedItem],
          total: state.total + addedItem.price * addedItem.quantity,
          cartQuantity: state.items.reduce((a, b) => a + b.quantity, 0) + action.payload.quantity
        }
    }
    case REMOVE_FROM_CART:
      const itemToRemove = state.items.find((item) => item.id === action.payload.id && item.spray === action.payload.spray);
      const newTotal = state.total - (itemToRemove.quantity * itemToRemove.price);

      return {
        ...state,
        items: state.items.filter((item) => item !== itemToRemove),
        total: newTotal
      };
    case SUBTRACT_QUANTITY:
      const addedItem = state.items.find((item) => item.id === action.payload.id && item.spray === action.payload.spray);

      if (addedItem.quantity === 1) {        
        return {
          ...state,
          items: state.items.filter((item) => item !== addedItem),
          total: state.total - addedItem.price,
          cartQuantity: state.items.reduce((a, b) => a + b.quantity, 0) - 1
        };
      } else {
        return {
          ...state,
          items: state.items.map((item) => {
            if (item.id === action.payload.id && item.spray === action.payload.spray) {
              return {
                ...item,
                quantity: item.quantity - 1
              }
            }
            return item
          }),
          total: state.total - addedItem.price,
          cartQuantity: state.items.reduce((a, b) => a + b.quantity, 0) - 1
        };
      }
    case ADD_QUANTITY:
      const newAddedItem = state.items.find((item) => item.id === action.payload.id && item.spray === action.payload.spray);
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id && item.spray === action.payload.spray) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
          return item
        }),
        total: state.total + newAddedItem.price,
        cartQuantity: state.items.reduce((a, b) => a + b.quantity, 0) + 1
      };
    default:
      return state;
  }
}

export default cartReducer;