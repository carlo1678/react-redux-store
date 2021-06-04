import React from "react";
import { useSelector } from "react-redux";
import CartContainer from "../components/CartContainer";

export default function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <h1>Your Cart!</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <CartContainer product={product} />
        ))}
      </div>
    </div>
  );
}
