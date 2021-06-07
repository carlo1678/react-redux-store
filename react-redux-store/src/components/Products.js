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
    <div className="products-container">
      <h1 style={{ color: "#c4dbe0" }}>Shop Here!</h1>
      <div className="container">
        <div>
          <div className="grid">
            {products.map((product) => (
              <ProductCards product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
