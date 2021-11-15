import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              ShopMart <i> JAVASCRIPTT REACT PROJECT </i> This is a web422
              application made with react and resfult api as the back end
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Pages</h6>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Product List</Link>
              </li>
              <li>
                <Link to="/registration">Registration</Link>
              </li>
              <li>
                <a href="http://scanfcode.com/category/android/">Android</a>
              </li>
              <li>
                <a href="http://scanfcode.com/category/templates/">Templates</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Contact Links</h6>
            <ul className="footer-links">
              <li>
                <a href="https://github.com/mahsan19/">Github</a>
              </li>
              <li>
                <span>Email Us : mahsan15@myseneca.ca</span>
              </li>
              <li>
                <span>Google</span>
              </li>
              <li>
                <a href="/sdsfsfd">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright © 2021 All Rights Reserved
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <span className="facebook">
                  <i className="fa fa-facebook" />
                </span>
              </li>
              <li>
                <span className="twitter">
                  <i className="fa fa-twitter" />
                </span>
              </li>
              <li>
                <span className="dribbble">
                  <i className="fa fa-dribbble" />
                </span>
              </li>
              <li>
                <span className="linkedin">
                  <i className="fa fa-linkedin" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
