import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import ProductCards from "../components/ProductCards";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer);
  useEffect(() => {
    getProducts(dispatch);
  }, []);
  return (
    <div className="container">
      <h1 style={{ color: "white" }}>Shop Here!</h1>
      <div className="grid">
        {products.map((product) => (
          <ProductCards product={product} />
        ))}
      </div>
    </div>
  );
}
