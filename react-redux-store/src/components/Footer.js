import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-white">
        <div className="container py-5">
          <div className="row py-4">
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <img src="img/logo.png" alt="" width="180" className="mb-3" />
              <p className="font-italic text-muted">
                Jess's Art Studio was an idea put together by her and her
                boyfriend. All artwork incorporated into the website was done by
                Jessica herself! Her boyfriend created the website!
              </p>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Shop</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a href="/products" class="text-muted">
                    Paintings!
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">Socials!</h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com/_____acissej_____/"
                    className="text-muted"
                  >
                    Jess' Instagram!
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.instagram.com/cartothelow/"
                    className="text-muted"
                  >
                    Carlo's Instagram!
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.facebook.com/carlo.carbonell"
                    className="text-muted"
                  >
                    Facebook!
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-lg-0">
              <h6 className="text-uppercase font-weight-bold mb-4">
                Collaborations!
              </h6>
              <p className="text-muted mb-4">
                If anyone would like to collaborate, please feel free to reach
                out to myself (Carlo) or Jessica, through the links to our
                Instagram pages! We would love to work with some of the aspiring
                artists in the industry!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* <h2>Jess's Art Studio</h2>
      <h4>About Us</h4>
      <ul>
        <li>
          <p>
            Jess's Art Studio was an idea put together by her and her boyfriend.
            All artwork incorporated into the website was done by Jessica
            herself! Her boyfriend created the website!
          </p>
        </li>
      </ul> */
