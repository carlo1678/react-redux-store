import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

export default function ShoppingCart() {
  const selectedProduct = useSelector((state) => state.singleProduct);
  return (
    <div>
      <Card className="text-center">
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
      </Card>
    </div>
  );
}
