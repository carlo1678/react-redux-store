import { toast } from "react-toastify";

const ADD_TO_CART = "ADD_TO_CART";

export const addProductToCart = (dispatch, data) => {
  return dispatch({ type: ADD_TO_CART, payload: data });
};
