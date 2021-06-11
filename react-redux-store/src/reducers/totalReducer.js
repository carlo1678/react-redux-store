import state from "./cartReducer";

const initialState = [state];

const total = initialState.reduce((sum, product) => sum + product.price);
