import { ADD_TO_CART } from "../action-types/cart-action-types";

const initialState = { products: [], total: 0 };

const cart = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
    case ADD_TO_CART:
      newState = {
        ...state,
        products: [...state.products, action.payload],
      };

      break;

    default:
  }

  newState.total = newState.products.reduce(
    (sum, product) => sum + product.price,
    0
  );
  return newState;
};
export default cart;
