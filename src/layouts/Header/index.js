import * as React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/Logo.svg";
import TwitterImg from "../../assets/images/twitter.svg";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="header-wrapper" collapseOnSelect>
        <div className="gradient-background1"></div>
        <div className="gradient-background2"></div>
        <Container fluid className="px-0">
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            className="justify-content-end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <Link to="/">
                  <img src={Logo} alt="Logo" className="w-75" />
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <button className="btn-follow-us">
                  Follow Us
                  <img src={TwitterImg} alt="Twitter" />
                </button>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
