import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cart from "./cartReducer";
import singleProduct from "./singleProductReducer";

// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({
  productReducer,
  cart,
  singleProduct,
});

export default rootReducer;
