import { GET_PRODUCTS } from "../action-types/product-action-types";
import { data } from "../data/data";

export const getProducts = async (dispatch) => {
  return dispatch({
    type: GET_PRODUCTS,
    payload: data,
  });
};
