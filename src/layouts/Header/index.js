import * as React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/Logo.svg";
import TwitterImg from "../../assets/images/twitter.svg";
import TwitterGradientImg from "../../assets/images/twitter-gradient.svg";

const Header = () => {
  const [show, setShow] = React.useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  return (
    <>
      <div className=" header-wrapper">
        <div className="gradient-background1"></div>
        <div className="gradient-background2"></div>
        <Container
          fluid
          className="px-0 d-flex justify-content-center justify-content-lg-between"
        >
          <div>
            <Link to="/" className="d-none d-lg-block">
              <img src={Logo} alt="Logo" />
            </Link>
            <div onClick={clickHandler} className="d-block d-lg-none">
              <Hamburger show={show} />
            </div>
          </div>
          <div className="d-lg-flex d-none justify-content-end align-items-center gap-3">
            <button className="btn-follow-us">
              Follow Us
              <img src={TwitterImg} alt="Twitter" />
            </button>
            <Link to="#about" className="navLink">
              About
            </Link>
            <Link to="#services" className="navLink">
              Services
            </Link>
            <Link to="#portfolio" className="navLink">
              Portfolio
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

const Hamburger = (props) => {
  return (
    <div className={props.show ? "hamburger active" : "hamburger"}>
      <div className="menu-background"></div>
      <img src={Logo} alt="Logo" />
      <div className="px-3 mt-3 menu">
        <div className="mt-2">
          <div className="hamburger-item">
            <Link to="/" className="navLink">
              Home
            </Link>
          </div>
          <div className="hamburger-item">
            <Link to="#about" className="navLink">
              About
            </Link>
          </div>
          <div className="hamburger-item">
            <Link to="#services" className="navLink">
              Services
            </Link>
          </div>
          <div className="hamburger-item">
            <Link to="#portfolio" className="navLink">
              Portfolio
            </Link>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <button className="follow-btn px-3 py-2">
              Follow Us
              <img src={TwitterGradientImg} alt="Twitter" className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
