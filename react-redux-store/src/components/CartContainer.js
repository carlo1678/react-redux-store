import React from "react";
import { Card, Button } from "react-bootstrap";

export default function CartContainer(props) {
  return (
    <div>
      <div className="cartInfo">
        <Card style={{ width: "375px" }}>
          <p id="cardP">{props.painting.price}</p>
          <Card.Img
            variant="top"
            src={props.painting.image}
            alt=""
            // height="200"
            // width="100"
          />

          <Card.Body className="cardBody">
            <Card.Title>{props.painting.name}</Card.Title>
            <p>{props.painting.description}</p>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
