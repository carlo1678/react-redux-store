import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function BootNav() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
          <Link to="/products">Shop</Link>
          <Link to="/mycart">Cart</Link>
        </Nav>
      </Navbar>
    </div>
  );
}
