import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addProductToCart } from "../actions/cartActions";
import "../styles/IndividualProduct.css";

export default function ShoppingCart(props) {
  const selectedProduct = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <Card className="text-center">
        <Card.Header>{selectedProduct.title}</Card.Header>
        <Card.Body>
          <Card.Img
            variant="top"
            className="cardimage"
            src={selectedProduct.image}
          />
          <Card.Text>{selectedProduct.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          ${selectedProduct.price}
        </Card.Footer>
      </Card> */}
      <div className="individualP">
        <Card>
          <Card.Img variant="top" src={selectedProduct.image} />
          <Card.Body className="individualPBody">
            <Card.Title>{selectedProduct.title}</Card.Title>
            <Card.Text>{selectedProduct.description}</Card.Text>
            <Button
              variant="primary"
              onClick={() => addProductToCart(dispatch, props.product)}
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
