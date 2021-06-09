import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addProductToCart } from "../actions/cartActions";
import { data } from "../data/data";
import "../styles/IndividualProduct.css";

export default function IndividualProduct(props) {
  const selectedProduct = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();
  // console.log(props.painting);
  return (
    <div>
      <div className="individualP">
        <Card className="wholeCard">
          <Card.Img
            className="indivCardImage"
            variant="top"
            src={selectedProduct.image}
          />
          <Card.Body className="individualPBody">
            <Card.Title>{selectedProduct.title}</Card.Title>
            <Card.Text>{selectedProduct.description}</Card.Text>
            <Card.Text>${selectedProduct.price}</Card.Text>
            <Button
              variant="primary"
              onClick={() => addProductToCart(dispatch, selectedProduct)}
            >
              Add To Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
