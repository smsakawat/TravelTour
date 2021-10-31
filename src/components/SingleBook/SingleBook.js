import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Rating from "react-rating";

const SingleBook = ({ handleDelete, singleBook }) => {
  const {
    title,
    img,
    rating,
    price,
    description,
    duration,
    date,
    reviews,
    _id,
  } = singleBook.tourDetails || {};

  const id = singleBook.id;
  const [bookingStatus, setBookingStatus] = useState(singleBook.status);
  console.log(bookingStatus);

  useEffect(() => {
    axios
      .put("https://calm-reef-90911.herokuapp.com/booking/status", {
        bookingStatus,
        id,
      })
      .then((res) => {
        console.log(res.data);
      });
  }, [bookingStatus]);

  return (
    <div className="row g-0 my-4">
      <div className="col-12 col-md-3 d-flex flex-column flex-md-row justify-content-center align-items-centeter">
        <img src={img} className="img-fluid " alt="singleBook-img" />
      </div>
      <div className="singleBook-body border border col-12 col-md-9  d-flex flex-column flex-md-row justify-content-start align-items-center">
        <div className=" border-end border-0 border-md-3 my-3 text-start p-3 d-flex justify-content-between align-items-center">
          <div>
            <div className="title">
              <div>
                {" "}
                <h5 className="fw-bolder my-2">{title}</h5>
              </div>
              <div>
                <p className="text-secondary fw-bolder">
                  Booked by:{" "}
                  <span className="primary-color">{singleBook.name}</span>
                </p>
              </div>
            </div>
            <div className="my-2">
              <Typography variant="body1" color="text.secondary">
                {description.slice(0, 50)}...
              </Typography>
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
          </div>
          <div
            className="my-2 text-start px-1 px-md-4 mb-5 mb-md-0"
            style={{ paddingBottom: "110px" }}
          >
            <FormControl>
              <FormLabel style={{ color: "gray", fontWeight: "bold" }}>
                Status
              </FormLabel>
              <RadioGroup
                value={bookingStatus}
                onChange={(e) => setBookingStatus(e.target.value)}
              >
                <FormControlLabel
                  value="pending"
                  control={<Radio color="warning" />}
                  label="Pending"
                ></FormControlLabel>
                <FormControlLabel
                  value="approved"
                  control={<Radio color="warning" />}
                  label="Approved"
                ></FormControlLabel>
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="text-start ms-3 px-2 px-md-4 pb-3 pb-md-0">
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
              onClick={() => handleDelete(singleBook.id)}
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

export default SingleBook;
