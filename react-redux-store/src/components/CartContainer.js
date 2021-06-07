import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CartContainer(props) {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.product.image}
          alt=""
          // height="200"
          // width="100"
        />
        <Card.Body className="cardBody">
          <Card.Title>{props.product.title}</Card.Title>
          <Card.Text>${props.product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
