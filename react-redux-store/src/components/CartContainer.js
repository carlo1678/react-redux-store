import React from "react";

export default function CartContainer(props) {
  return (
    <div>
      <h4>{props.product.title}</h4>
      <img src={props.product.image} alt="" height="150" width="100" />
      <p>${props.product.price}</p>
    </div>
  );
}
