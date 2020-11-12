import axios from 'axios';
import {
  REQUEST_PRODUCT_FAILED,
  REQUEST_PRODUCT_PENDING,
  REQUEST_PRODUCT_SUCCESS
} from '../types';

export const requestProduct = (id) => async (dispatch) => {
  dispatch({
    type: REQUEST_PRODUCT_PENDING,
  });

  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    dispatch({
      type: REQUEST_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: REQUEST_PRODUCT_FAILED,
      payload: error,
    });
  }
};