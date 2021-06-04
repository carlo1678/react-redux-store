import React from "react";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const selectedProduct = useSelector((state) => state.singleProduct);
  return (
    <div>
      <h1>Your Items!</h1>
      <img src={selectedProduct.image} height="50" width="50" alt="" />
    </div>
  );
}
