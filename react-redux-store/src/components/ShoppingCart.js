import React from "react";
import { useSelector } from "react-redux";
import CartContainer from "../components/CartContainer";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart-div">
      <h1 className="fullcartheading">Your Cart!</h1>
      <div className="cart-container">
        {cart.map((painting) => (
          <CartContainer painting={painting} />
        ))}
      </div>
    </div>
  );
}
