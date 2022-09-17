import * as React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/Logo.svg";
import TwitterImg from "../../assets/images/twitter.svg";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="header-wrapper">
        <div className="gradient-background1"></div>
        <div className="gradient-background2"></div>
        <Container fluid className="px-0">
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav navbarScroll>
              <button className="btn-follow-us">
                Follow Us
                <img src={TwitterImg} alt="Twitter" />
              </button>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
