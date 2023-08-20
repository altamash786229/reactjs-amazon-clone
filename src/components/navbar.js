import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaAmazon } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

function AmazonNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand">
          <FaAmazon className="amazon-icon" />
        </Link>
        <Nav className="me-auto">
          <Link to="category/mens" className="nav-link">
            Mens
          </Link>
          <Link to="category/womens" className="nav-link">
            Womens
          </Link>
          <Link to="category/kids" className="nav-link">
            Kids
          </Link>
          <Link to="category/girls" className="nav-link">
            Girls
          </Link>
          <Link to="/signin" className="nav-link">
            signin
          </Link>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default AmazonNavbar;
