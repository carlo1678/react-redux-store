import state from "./cartReducer";

const initialState = [state];
console.log(initialState);
const total = initialState.reduce((sum, product) => sum + product.price);
