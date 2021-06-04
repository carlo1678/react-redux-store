import React from "react";

export default function LandingPage() {
  return (
    <div className="landingpage">
      <h1>Welcome to my E-Commerce Site!</h1>
      <div className="landing-div">
        <h1 className="landing-text">Welcome to our Art Site!</h1>
        <h3 className="landing-text">
          We hope you enjoy some of the products we have to offer!
        </h3>
      </div>
      <div>
        <h1>Example Pictures!</h1>
      </div>
      <div className="example-pic-container">
        <img
          src="https://afremov.com/images/product/image_2329.jpeg"
          alt=""
          height="700"
          width="700"
        ></img>
        <img
          src="https://images.saatchiart.com/saatchi/91278/art/6611261/5680931-RZTXQSBQ-7.jpg"
          alt=""
          height="700"
          width="700"
        ></img>
        <img
          src="https://media-cdn.tripadvisor.com/media/photo-s/0d/5d/30/53/nice-painting-from-artist.jpg"
          alt=""
          height="700"
          width="700"
        ></img>
        <img
          src="http://www.simplyniceart.com/wp-content/uploads/2016/01/420-image-A-Tree-Painting.png"
          alt=""
          height="700"
          width="700"
        ></img>
      </div>
    </div>
  );
}
