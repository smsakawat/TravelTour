import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button, Typography } from "@mui/material";
import React from "react";
import couple from "../../images/couple.png";
import "./Discount.css";

const Discount = () => {
  return (
    <div className="container-fluid my-5 py-4">
      <div className="container">
        <div className="row g-0">
          <div className="col-6 discount-text">
            <div className="discount-details d-flex justify-content-center align-items-center ">
              <div className="mt-4">
                <Typography
                  variant="h5"
                  style={{ color: "lightgray", fontWeight: "bold" }}
                >
                  Enjoy Summer Deals
                </Typography>
                <h1 className="fw-bolder text-light my-3">
                  Up To 40% Discount
                </h1>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: "#1e354c",
                      color: "#fff",
                      padding: "10px 16px",
                    }}
                  >
                    LEARN MORE
                    <span
                      className="text-light ms-2"
                      style={{ fontSize: "14px" }}
                    >
                      <ArrowForwardIosIcon style={{ fontSize: "18px" }} />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={couple} className="img-fluid" alt="couple-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
