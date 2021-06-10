import React from "react";
import { Carousel } from "react-bootstrap";
import IMG_1244 from "../assets/IMG_1244.jpg";
import IMG_1245 from "../assets/IMG_1245.jpg";

export default function LandingPage() {
  return (
    <div className="landingpage">
      <div className="landing-div">
        <h1 className="landing-text">Welcome to our Art Site!</h1>
        <h3 className="landing-text">
          We hope you enjoy some of the products we have to offer!
        </h3>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/jXZNCei.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/ftu6Bd5.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/N0HDWRa.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="headingDiv">
        <h1>Multiple Different Styles of Art!</h1>
      </div>
      <div className="example-pic-container">
        <img
          className="example-pic-1"
          src={IMG_1244}
          alt=""
          height="700"
          width="500"
        />
        <img src={IMG_1245} alt="" height="700" width="500"></img>
      </div>
    </div>
  );
}
