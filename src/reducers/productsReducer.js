import {
  REQUEST_PRODUCTS_FAILED,
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS
} from '../types';

const initStateProducts =  {
  products: [],
  error: '',
  isPending: false,
};

const requestProducts = (state = initStateProducts, action = {}) => {
  switch (action.type) {
    case REQUEST_PRODUCTS_PENDING:
      return { ...state, isPending: true };
    case REQUEST_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload, isPending: false };
    case REQUEST_PRODUCTS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

export default requestProducts;