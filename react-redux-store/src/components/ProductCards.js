import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../actions/cartActions";
import { selectProduct } from "../actions/singleProductActions";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function ProductCards(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="container">
        <div>
          <Card className="product-cards" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={props.product.image} />
            <Card.Body>
              <Card.Title>{props.product.title}</Card.Title>
              <Card.Text>{props.product.description}</Card.Text>
              <Button onClick={() => addProductToCart(dispatch, props.product)}>
                Add to Cart
              </Button>
              <Link to="./singleProductPage/:id">
                <Button onClick={() => selectProduct(dispatch, props.product)}>
                  View More
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>

      {/* <h1>Title</h1>
      <p>{props.product.title}</p>
      <img src={props.product.image} alt="" height="200" width="200" />
      <p>{props.product.price}</p>
      <p>{props.product.description}</p>
      <button onClick={() => addProductToCart(dispatch, props.product)}>
        Add to Cart
      </button>
      <Link to="./singleProductPage/:id">
        <button onClick={() => selectProduct(dispatch, props.product)}>
          View Product Info
        </button>
      </Link> */}
    </div>
  );
}
