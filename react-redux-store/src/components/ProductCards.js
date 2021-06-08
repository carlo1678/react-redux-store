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
            <Card.Img
              variant="top"
              className="product-picture"
              src={props.painting.image}
            />
            <Card.Body>
              <Card.Title>{props.painting.name}</Card.Title>
              <Card.Text>${props.painting.price}</Card.Text>
              <div className="first-button">
                <Button
                  onClick={() => addProductToCart(dispatch, props.painting)}
                >
                  Add to Cart
                </Button>
              </div>
              <div className="second-button">
                <Link to="./singleProductPage/:id">
                  <Button
                    onClick={() => selectProduct(dispatch, props.painting)}
                  >
                    View More
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
