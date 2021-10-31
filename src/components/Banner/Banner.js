import MoneyIcon from "@mui/icons-material/Money";
import PublicIcon from "@mui/icons-material/Public";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

AOS.init();

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-container">
        <div
          className="banner-text text-center text-light"
          data-aos="fade-down"
        >
          <h1 style={{ fontSize: "4rem", fontWeight: "700" }}>
            Find Next Place To Visit
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              marginTop: "13px",
              letterSpacing: "1px",
            }}
          >
            Discover amazing places at exclusive deals
          </p>
          <div className="banner-btn">
            <Link className="banner-link" to="signup">
              GET STARTED
            </Link>
          </div>
          <div className="banner-button"></div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <div className="banner-end ">
          <div className=" p-4 me-1  d-flex  justify-content-between align-items-center flex-row">
            <div className="advantage-icon me-4">
              <PublicIcon style={{ fontSize: 40, color: "#fff" }} />
            </div>
            <div className="text-start">
              <h6 className="fw-bolder text-light">700+ DESTINATIONS</h6>
              <Typography variant="body1" color="#fff" sx={{ fontSize: 15 }}>
                Our expert team handpicked all destinations in this site.
              </Typography>
            </div>
          </div>
          <div className=" p-4 me-1  d-flex justify-content-between align-items-center">
            <div className="advantage-icon me-4">
              <MoneyIcon style={{ fontSize: 40, color: "#fff" }} />
            </div>
            <div className="text-start">
              <h6 className="fw-bolder text-light">BEST PRICE GUARANTEE</h6>
              <Typography variant="body1" color="#fff" sx={{ fontSize: 15 }}>
                Price match within 48 hours of order confirmation.
              </Typography>
            </div>
          </div>
          <div className=" p-4 me-1  d-flex justify-content-between align-items-center">
            <div className="advantage-icon me-4">
              <SupportAgentIcon style={{ fontSize: 40, color: "#fff" }} />
            </div>
            <div className="text-start">
              <h6 className="fw-bolder text-light">TOP NOTCH SUPPORT</h6>
              <Typography variant="body1" color="#fff" sx={{ fontSize: 15 }}>
                We are here to help, before, during also after your trip.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
