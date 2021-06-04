import React from "react";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  const selectedProduct = useSelector((state) => state.singleProduct);
  return (
    <div>
      <div className="item-container">
        <h1>Your Items!</h1>
        <h3 style={{ color: "white" }}>{selectedProduct.title}</h3>
        <img src={selectedProduct.image} height="150" width="150" alt="" />
        <h5 className="product-text" style={{ color: "white" }} s>
          {selectedProduct.description}
        </h5>
      </div>
    </div>
  );
}
