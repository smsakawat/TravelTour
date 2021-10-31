import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Button, Typography } from "@mui/material";
import Rating from "react-rating";
import { Link, useHistory } from "react-router-dom";
import "./Tour.css";

const Tour = ({ tour }) => {
  const history = useHistory();

  const {
    img,
    title,
    duration,
    price,
    rating,
    popularity,
    reviews,
    _id,
    description,
  } = tour || {};
  return (
    <div className="col-md-4 h-100">
      <div>
        <div className="img-div">
          {" "}
          <img className="card-img-top tour-img" src={img} alt="tour" />
        </div>

        <div className="tourcard-body ">
          <div className="title">
            <h5 className="fw-bolder my-2">{title}</h5>
          </div>
          <div className="my-3">
            <Typography variant="body2" color="text.secondary">
              {description.slice(0, 60)}...
            </Typography>
          </div>
          <div className="mt-4 mb-2 d-flex justify-content-between align-items-center">
            <div>
              <span className="primary-color me-1">
                <AccessTimeIcon />
              </span>
              <span className="text-secondary "> {duration}</span>
            </div>
            <div>
              <h5 className="secondary-color">From</h5>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="text-warning" style={{ fontSize: "0.7em" }}>
                {" "}
                <Rating
                  initialRating={rating}
                  emptySymbol="far fa-star"
                  fullSymbol="fas fa-star"
                  readonly
                />
              </span>
              <small className="secondary-color">({reviews} reviews)</small>
            </div>
            <div>
              <span
                className="primary-color"
                style={{ fontSize: "1.3em", fontWeight: "900" }}
              >
                ${price}
              </span>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-4">
            <Link to={`/booking/${_id}`} style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#f97150",
                  padding: "8px 18px",
                  width: "140px",
                }}
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
