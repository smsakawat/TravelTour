import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import payment from "../../../images/payment.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-main p-5" style={{ backgroundColor: "#202020" }}>
        <div className="d-flex justify-content-between align-items-center container">
          <div className="w-25">
            <div className="text-start">
              <h4 className="fw-bolder primary-color">Call Us</h4>
              <h5 className="text-light">
                <span className="me-2">
                  <CallIcon />+ 634-243-3343
                </span>
              </h5>
            </div>
            <div className="text-start mt-4">
              <h4 className="fw-bolder primary-color">Email</h4>
              <h5 className="text-light">traveltour1@gmail.com</h5>
            </div>
          </div>
          <div className="w-25 text-start">
            <h4 className="fw-bolder text-light my-3">About Us</h4>
            <Link to="story" className="footer-link my-2">
              Our Story
            </Link>
            <Link to="story" className="footer-link my-2">
              Travel Blog & Tips
            </Link>
            <Link to="story" className="footer-link my-2">
              Working With Us
            </Link>
            <Link to="story" className="footer-link my-2"></Link>
            <Link to="story" className="footer-link my-2">
              Be Our Partner
            </Link>
          </div>
          <div className="text-start w-25">
            <h4 className="fw-bolder text-light mb-3">Support </h4>
            <Link to="story" className="footer-link my-2">
              Customer Support
            </Link>
            <Link to="story" className="footer-link my-2">
              Privacy & Policy
            </Link>
            <Link to="story" className="footer-link my-2">
              Contact Channels
            </Link>
          </div>
          <div className="text-start w-25">
            <h4 className="fw-bolder text-light my-3">Pay Safely With Us </h4>
            <p className="text-light my-3">
              The payment is encrypted and transmitted securely with an SSL
              protocol.
            </p>
            <div style={{ backgroundColor: "#202020" }}>
              <img src={payment} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="footer-end"
        style={{ backgroundColor: "#181818", height: "80px" }}
      >
        <div className="container d-flex justify-content-between align-items-center pt-4">
          <p className="text-secondary text-start">
            &copy;2019 Travel Tour All Rights Reserved.
          </p>
          <div>
            <span className="text-secondary me-3">Follow Us On</span>
            <span className="mx-2 text-light">
              <i className="fab fa-facebook-f"></i>
            </span>
            <span className="mx-2 text-light">
              <i className="fab fa-twitter"></i>
            </span>
            <span className="mx-2 text-light">
              <i className="fab fa-linkedin-in"></i>
            </span>
            <span className="mx-2 text-light">
              <i className="fab fa-pinterest-p"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
