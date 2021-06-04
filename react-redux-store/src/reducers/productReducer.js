import { GET_PRODUCTS } from "../action-types/product-action-types";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return (state = action.payload);
    default:
      return state;
  }
};

export default productReducer;
