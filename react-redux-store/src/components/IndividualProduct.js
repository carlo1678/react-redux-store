import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { addProductToCart } from "../actions/cartActions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function IndividualProduct(props) {
  const selectedProduct = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();
  const [imageType, setImageType] = useState("normal");
  const imagePainting =
    Object.keys(selectedProduct.image).length === 2
      ? selectedProduct.image[imageType]
      : selectedProduct.image;

  return (
    <div>
      <div className="individualP">
        <Card className="wholeCard">
          <div className="indivCardDiv">
            <Card.Img
              onMouseEnter={() => setImageType("blacklight")}
              onMouseLeave={() => setImageType("normal")}
              className="indivCardImage"
              variant="top"
              src={imagePainting}
            />
          </div>

          <Card.Body className="individualPBody">
            <Card.Title>{selectedProduct.title}</Card.Title>
            <Card.Text>{selectedProduct.description}</Card.Text>
            <Card.Text>${selectedProduct.price}</Card.Text>
            <div className="indivButton">
              <Button
                variant="primary"
                onClick={() => {
                  addProductToCart(dispatch, selectedProduct);
                  toast.info("Successfully added to cart!", {
                    position: toast.POSITION.TOP_CENTER,
                  });
                }}
              >
                Add To Cart
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
