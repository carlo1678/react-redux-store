import { SET_SELECTED_PRODUCT } from "../action-types/single-product-action-types";

export const selectProduct = (dispatch, product) => {
  return dispatch({
    type: SET_SELECTED_PRODUCT,
    payload: product,
  });
};
