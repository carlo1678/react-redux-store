import { combineReducers } from "redux";
import productReducer from "./productReducer";
import cart from "./cartReducer";
import singleProduct from "./singleProductReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  productReducer,
  cart,
  singleProduct,
  cartReducer,
});

export default rootReducer;
