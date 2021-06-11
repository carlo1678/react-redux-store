import React from "react";
import { Carousel } from "react-bootstrap";
import magirl from "../assets/magirl.png";

export default function LandingPage() {
  return (
    <div className="landingpage">
      <div className="landing-div">
        <h1 className="landing-text">Welcome to our Art Site!</h1>
        <h3 className="landing-text">
          We hope you enjoy some of the products we have to offer!
        </h3>
      </div>
      <div className="carouselClass">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="https://i.imgur.com/jXZNCei.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="https://i.imgur.com/VGdWVAv.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-50"
              src="https://i.imgur.com/N0HDWRa.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="aboutContainer">
        <h1>About the Artist!</h1>
        <div className="aboutInfo">
          <img className="aboutPicture" src={magirl} alt="" />
          <p>
            Jessica is a 23 year old aspiring artist out of Florida. She's
            highly capable of putting whatever it is in her mind, onto a canvas.
            For the longest time, she has been painting her heart out, without
            the proper outlet in order for her to shine. This is just the
            beginning of what will be the display of her work. Stay tuned and
            make sure to come back to this website often, so you can see when we
            feature new paintings!
          </p>
        </div>
      </div>
      <div className="animatedContainer">
        <div className="slide-container">
          <div className="slide">
            <img src="https://i.imgur.com/VgN5qYr.jpg" alt="Slide 1" />
            <img src="https://i.imgur.com/jXZNCei.jpg" alt="Slide 2" />
            <img src="https://i.imgur.com/00eAL79.jpg" alt="Slide 3" />
            <img src="https://i.imgur.com/vVbkAWh.jpg" alt="Slide 4" />
            <img src="https://i.imgur.com/ftu6Bd5.jpg" alt="Slide 5" />
          </div>
        </div>
      </div>
    </div>
  );
}
