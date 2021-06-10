import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../actions/cartActions";
import { selectProduct } from "../actions/singleProductActions";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export default function ProductCards(props) {
  const dispatch = useDispatch();
  const [imageType, setImageType] = useState("normal");

  const imagePainting =
    Object.keys(props.painting.image).length === 2
      ? props.painting.image[imageType]
      : props.painting.image;
  return (
    <div className="product-container">
      <div className="container">
        <div className="actualCardContainer">
          <Card className="product-cards" style={{ width: "15rem" }}>
            <Card.Img
              onMouseEnter={() => setImageType("blacklight")}
              onMouseLeave={() => setImageType("normal")}
              variant="top"
              className="product-picture"
              src={imagePainting}
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
