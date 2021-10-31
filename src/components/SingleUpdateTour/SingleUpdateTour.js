import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { Button } from "@mui/material";
import "aos/dist/aos.css";
import Rating from "react-rating";
import { Link, useHistory } from "react-router-dom";

const SingleUpdateTour = ({ tour, handleDelete }) => {
  const history = useHistory();

  const {
    img,
    title,
    duration,
    price,
    rating,

    reviews,
    _id,
  } = tour || {};

  return (
    <div className="col-md-4 h-100 " data-aos="fade-up">
      <div>
        <div className="img-div">
          {" "}
          <img className="card-img-top tour-img" src={img} alt="tour" />
        </div>

        <div className="tourcard-body ">
          <div className="title">
            <h5 className="fw-bolder my-2">{title}</h5>
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
          <div className="d-flex justify-content-between align-items-center mt-4">
            <Button
              onClick={() => handleDelete(_id)}
              endIcon={<DeleteIcon />}
              variant="contained"
              color="error"
            >
              DELETE
            </Button>

            <Link
              to={`/updateDetails/${_id}`}
              style={{ textDecoration: "none" }}
            >
              <Button endIcon={<UpdateIcon />} variant="contained" color="info">
                UPDATE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUpdateTour;
