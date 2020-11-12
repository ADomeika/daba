import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import productsReducer from './productsReducer';
import productReducer from './productReducer';

export default combineReducers({
  cartReducer,
  productsReducer,
  productReducer,
});
