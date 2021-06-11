import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function BootNav() {
  return (
    <div>
      <Navbar className="navbar-primary" variant="dark">
        <Navbar.Brand className="homeTitle" href="/">
          <span className="commerce">E-Commerce</span>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link className="navlinks" to="/">
            Home
          </Link>
          <Link className="navlinks" to="/products">
            Shop
          </Link>
          <Link className="navlinks" to="/mycart">
            Cart
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}
