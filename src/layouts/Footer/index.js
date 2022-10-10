import * as React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="pages-wrapper px-0 px-md-5">
        <div className="left">
          <div className="d-flex flex-column px-3">
            <h5 className="mb-3">PAGES</h5>
            <Link>About Us</Link>
            <Link>Services</Link>
            <Link>Portfolio</Link>
          </div>
          <div className="d-flex flex-column px-5">
            <h5 className="mb-3">Company</h5>
            <Link>Affaliate Program</Link>
            <Link>Terms of Use</Link>
            <Link>Privacy policy</Link>
          </div>
        </div>
        <div className="right px-3">
          <h6 className="mb-0">20</h6>
          <p>Clients</p>
          <h6 className="mb-0">32</h6>
          <p>Employees</p>
        </div>
      </div>
      <div className="px-2 pt-3 pb-5 mb-3">
        <h6>© NovaLabs Ltd. 2021 - All Rights Reserved</h6>
      </div>
      <div className="gradient-background2"></div>
    </div>
  );
};

export default Footer;
