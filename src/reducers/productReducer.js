import {
  REQUEST_PRODUCT_FAILED,
  REQUEST_PRODUCT_PENDING,
  REQUEST_PRODUCT_SUCCESS
} from '../types';

const initState =  {
  product: {},
  error: '',
  isPending: false,
};

const requestProduct = (state = initState, action ={}) => {
  switch (action.type) {
    case REQUEST_PRODUCT_PENDING:
      return { ...state, isPending: true };
    case REQUEST_PRODUCT_SUCCESS:
      return { ...state, product: action.payload, isPending: false };
    case REQUEST_PRODUCT_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
}

export default requestProduct;