import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import Tour from "../Tour/Tour";
import "./Tours.css";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(true);
    axios.get("https://calm-reef-90911.herokuapp.com/tours").then((res) => {
      setShowSpinner(false);
      setTours(res.data);
    });
  }, []);
  return (
    <div className="container-fluid tours-container py-5">
      <div className=" container">
        <div className="tours-title text-center my-5">
          <h3 className="fw-bolder">
            Popular <span className="primary-color">Tours</span>
          </h3>
          <p className="lead primary-color my-2 ">
            Explore Our Exclusive Tours
            <span className="ms-2">
              <ArrowRightAltIcon />
            </span>
          </p>
        </div>
        <div className="py-4" id="tours">
          {showSpinner ? (
            <Spinner animation="border" variant="secondary" className="my-5" />
          ) : (
            <div className="row g-5">
              {tours.map((tour) => (
                <Tour key={tour._id} tour={tour}></Tour>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tours;
