import React from "react";
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
      <div>
        <h1>Example Pictures!</h1>
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
        {/* <img
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
        ></img> */}
      </div>
    </div>
  );
}
