import React from "react";
import { useSelector } from "react-redux";
import CartContainer from "../components/CartContainer";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart-div">
      <h1 className="fullcartheading">Your Cart!</h1>
      <div className="cart-container">
        {cart.products.map((painting, price) => (
          <CartContainer painting={painting} price={price} />
        ))}
      </div>
      <div className="totalDiv">
        <p>Total: ${cart.total}</p>
      </div>
    </div>
  );
}
