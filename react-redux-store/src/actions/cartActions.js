const ADD_TO_CART = "ADD_TO_CART";

export const addProductToCart = (dispatch, product) => {
  console.log(product);
  return dispatch({ type: ADD_TO_CART, payload: product });
};
