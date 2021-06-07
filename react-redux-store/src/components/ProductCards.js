import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../actions/cartActions";
import { selectProduct } from "../actions/singleProductActions";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function ProductCards(props) {
  const dispatch = useDispatch();
  return (
    <div className="product-container">
      <div className="container">
        <div>
          <Card className="product-cards" style={{ width: "15rem" }}>
            <Card.Img variant="top" src={props.product.image} />
            <Card.Body>
              <Card.Title>{props.product.title}</Card.Title>
              <Card.Text></Card.Text>
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
    </div>
  );
}
