import React, { useState } from "react";

export default function CartContainer(props) {
  const [imageType, setImageType] = useState("normal");

  const imagePainting =
    Object.keys(props.painting.image).length === 2
      ? props.painting.image[imageType]
      : props.painting.image;

  return (
    <div>
      <div className="actualCartContainer">
        <div className="image">
          <img
            onMouseEnter={() => setImageType("blacklight")}
            onMouseLeave={() => setImageType("normal")}
            src={imagePainting}
            height="200"
            alt=""
          />
        </div>
        <div className="description">
          <p className="descriptionP">{props.painting.description}</p>
        </div>
        <div className="price">
          <p className="priceP">Price: ${props.painting.price}</p>
        </div>
      </div>
    </div>
  );
}
