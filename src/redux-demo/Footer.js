import React from "react";

import "./footer.styles.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Shop</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#">Shop</a>
              </li>
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>My Account</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/#">Login</a>
              </li>
              <li>
                <a href="/#">Register</a>
              </li>
              <li>
                <a href="/#">My Account</a>
              </li>
              <li>
                <a href="/#">Wishlist</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>123 Main Street</li>
              <li>New York, NY 10001</li>
              <li>sujan@info.com</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="text-muted">
                &copy; {new Date().getFullYear()} My E-commerce Site. All
                rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
