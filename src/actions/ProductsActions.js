import axios from 'axios';
import {
  REQUEST_PRODUCTS_FAILED,
  REQUEST_PRODUCTS_PENDING,
  REQUEST_PRODUCTS_SUCCESS
} from '../types';

export const requestProducts = () => async (dispatch) => {
  dispatch({
    type: REQUEST_PRODUCTS_PENDING,
  });

  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    dispatch({
      type: REQUEST_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REQUEST_PRODUCTS_FAILED,
      payload: error,
    });
  }
};