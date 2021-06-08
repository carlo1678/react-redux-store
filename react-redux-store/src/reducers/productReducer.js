import { GET_PRODUCTS } from "../action-types/product-action-types";
import { data } from "../data/data";

const initialState = data;

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return [...state];
    default:
      return state;
  }
};

export default productReducer;
