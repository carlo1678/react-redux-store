import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import ProductCards from "../components/ProductCards";

export default function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer);
  const paintings = products[0].paintings;
  console.log(products);
  useEffect(() => {
    getProducts(dispatch);
  }, []);

  return (
    <div className="products-container">
      <h1 style={{ color: "#c4dbe0" }}>Shop Here!</h1>
      <div className="container">
        <div>
          <div className="grid">
            {paintings.map((painting) => (
              <ProductCards painting={painting} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
