import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import "./Destinations.css";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setShowSpinner(true);
    fetch("https://calm-reef-90911.herokuapp.com/destinations")
      .then((res) => res.json())
      .then((data) => {
        setShowSpinner(false);
        setDestinations(data);
      });
  }, []);
  return (
    <div className="container-fluid my-5">
      <div className="my-3 container">
        <h3 className="fw-bolder my-2">
          Popular <span className="primary-color">Destinations</span>
        </h3>
        <p className="lead primary-color">
          Explore our awesome destinations{" "}
          <span className="ms-2">
            <ArrowRightAltIcon />
          </span>
        </p>
      </div>
      <div className="container my-3 py-5 ">
        {showSpinner ? (
          <Spinner animation="border" variant="secondary" className="my-5" />
        ) : (
          <div className="row g-5">
            {destinations.map((destination, index) => (
              <div key={index} className="col-md-4">
                {" "}
                <div
                  className="card-div"
                  style={{ backgroundImage: `url(${destination?.img})` }}
                >
                  <div className="card-content">
                    <h3 className="card-heading fw-bold text-center">
                      {destination?.title}
                    </h3>
                    <p className="card-desc my-3">
                      {destination?.description.slice(0, 100)}...
                    </p>
                    <Link
                      to="/blogs"
                      className="primary-color destination-link"
                      style={{ fontWeight: "bold" }}
                    >
                      Find Out More
                      <span className="ms-2">
                        <i className="fas fa-chevron-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
