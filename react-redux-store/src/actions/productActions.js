import { GET_PRODUCTS } from "../action-types/product-action-types";

const storeURL = "https://fakestoreapi.com/products/";
export const getProducts = async (dispatch) => {
  const getStoreProducts = await fetch(storeURL);
  const getStoreProductsJSON = await getStoreProducts.json();

  return dispatch({
    type: GET_PRODUCTS,
    payload: getStoreProductsJSON,
  });
};
