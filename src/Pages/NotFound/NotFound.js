import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="py-5 error-container d-flex justify-content-center align-items-center">
        <div>
          <h4 className="text-light fw-bolder">
            THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST
          </h4>
          <p className="my-4 fw-bold text-light">
            YOU MAY HAVE MISTYPED THE ADDRESS OR THE PAGE MAY HAVE MOVED
          </p>
          <button className="btn btn-success my-4 ">
            <span className="me-2 text-light">
              <ArrowBackIcon />
            </span>
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
