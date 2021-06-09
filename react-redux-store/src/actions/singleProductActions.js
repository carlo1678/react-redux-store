export const selectProduct = (dispatch, product) => {
  console.log(product);
  return dispatch({
    type: "SET_SELECTED_PRODUCT",
    payload: product,
  });
};
