import React from "react";
import { useSelector } from "react-redux";
import CartContainer from "../components/CartContainer";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="cart-div">
      <h1 style={{ color: "white" }}>Your Cart!</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <CartContainer product={product} />
        ))}
      </div>
    </div>
  );
}
