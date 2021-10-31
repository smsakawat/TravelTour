import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { Button, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Rating from "react-rating";

AOS.init();
const MyTour = ({ myTour, handleDelete }) => {
  console.log(myTour.tourDetails);
  const { title, img, rating, price, description, duration, date, reviews } =
    myTour.tourDetails || {};

  return (
    <div className="row g-0 my-4" data-aos="fade-left">
      <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
        <img
          src={img}
          className="img-fluid w-100 h-100 ps-0"
          alt="mytour-img"
        />
      </div>
      <div className="mytour-body col-12 col-md-9  border border  p-3 d-flex justify-content-start align-items-center">
        <div className="border-end border-3 text-start me-2">
          <div className="title">
            <h5 className="fw-bolder my-2">{title}</h5>
          </div>
          <div className="my-3">
            <span className="primary-color me-1">
              <AccessTimeIcon />
            </span>
            {duration}
          </div>
          <div className="my-2">
            <span className="primary-color me-2">
              <DateRangeIcon />
            </span>
            <span className="text-secondary fw-bold"> {date}</span>
          </div>
          <div className="my-2">
            <Typography variant="body1" color="text.secondary">
              {description.slice(0, 80)}...
            </Typography>
          </div>
        </div>
        <div className="text-start ms-3">
          {" "}
          <div>
            <div>
              <h5 className="secondary-color">From</h5>
            </div>
          </div>
          <div>
            <span
              className="primary-color "
              style={{ fontSize: "1.3em", fontWeight: "800" }}
            >
              ${price}
            </span>
          </div>
          <div className="my-3">
            <span className="text-warning" style={{ fontSize: "0.9em" }}>
              {" "}
              <Rating
                initialRating={rating}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                readonly
              />
            </span>
            <small className="secondary-color">({reviews})</small>
          </div>
          <div className="d-flex justify-content-start align-items-center">
            <Button
              onClick={() => handleDelete(myTour.id)}
              variant="contained"
              style={{ backgroundColor: " #f97150" }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTour;
