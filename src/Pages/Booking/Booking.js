import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WifiIcon from "@mui/icons-material/Wifi";
import { Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();
  const [tour, setTour] = useState({});
  const { user } = useAuth();

  //   hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const {
    title,
    date,
    img,
    description,
    maxPeople,
    rating,
    reviews,
    minAge,
    price,

    duration,
    pickup,
    country,
  } = tour || {};

  useEffect(() => {
    axios.get(`http://localhost:5000/booking/${id}`).then((res) => {
      setTour(res.data);
    });
  }, []);

  //   handle form on submit
  const onSubmit = (data) => {
    data.id = tour._id;
    // console.log(data);
    data.userEmail = user?.email;
    data.tourDetails = tour;
    data.status = "pending";
    axios.post("http://localhost:5000/booking/addBooking", data).then((res) => {
      if (res.data.insertedId) {
        alert("booking confirmed");
        reset();
      }
    });
  };

  return (
    <div>
      <div
        className="tour-banner"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="container my-5 py-5">
        <div className="row g-5">
          <div className="col-md-7">
            <div className="my-4">
              <h4 className="text-start" style={{ fontWeight: "800" }}>
                {title}
              </h4>
              <div className="my-3 text-start">
                <span
                  className="text-warning text-start"
                  style={{ fontSize: "0.9em" }}
                >
                  <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                  />
                </span>
                <span className="secondary-color">({reviews} reviews)</span>
              </div>
              <div className="d-flex justify-content-between align-items-center my-4">
                <div>
                  <span className="primary-color me-2">
                    <AccessTimeIcon />
                  </span>
                  <span className="text-secondary fw-bold">{duration}</span>
                </div>
                <div>
                  <span className="me-2 primary-color">
                    <PeopleAltOutlinedIcon />
                  </span>
                  <span className="text-secondary fw-bold">
                    Max People: {maxPeople}
                  </span>
                </div>
                <div className="pe-1">
                  <span className="me-2 primary-color">
                    <WifiIcon />
                  </span>
                  <span className="text-secondary fw-bold">
                    Wifi: Available
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-2">
                <div>
                  <span className="primary-color me-2">
                    <DateRangeIcon />
                  </span>
                  <span className="text-secondary fw-bold"> {date}</span>
                </div>
                <div className="me-5">
                  <span className="me-2 primary-color">
                    <PersonOutlineOutlinedIcon />
                  </span>
                  <span className="text-secondary fw-bold ">
                    Min Age: {minAge}
                  </span>
                </div>
                <div>
                  <span className="me-2 primary-color">
                    <LocationOnOutlinedIcon />
                  </span>
                  <span className="text-secondary fw-bold">
                    Pickup: {pickup?.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
            <hr className="my-3 text-secondary" />
            <div className="tour-desc">
              <p className="lead text-secondary text-start">{description}</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className=" p-4 border border">
              <p className="fw-bold text-start">Price</p>
              <div className="text-start">
                <span className="text-secondary me-3 text-start">From</span>
                <Typography
                  variant="h4"
                  component="span"
                  style={{ fontWeight: "800" }}
                >
                  ${price}
                </Typography>
                <span className="ms-3">
                  <LocalOfferOutlinedIcon />
                </span>
              </div>
              <p className="my-3">
                {" "}
                <span className="text-secondary  border-bottom border-2 my-4 pb-2 pt-5">
                  Booking Form
                </span>
              </p>
              <div>
                <form
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ display: "felx", flexDirection: "column" }}
                >
                  <input
                    {...register("name")}
                    defaultValue={user?.displayName}
                    placeholder="Full Name"
                    className="p-2 my-2 w-100 form-control"
                  />

                  <input
                    {...register("email", { required: true })}
                    defaultValue={user?.email}
                    placeholder="Email Address"
                    className="p-2 my-2 w-100 form-control"
                  />

                  <input
                    {...register("Phone", { required: true })}
                    type="number"
                    placeholder="Phone"
                    className="p-2 my-2 w-100 form-control"
                  />

                  <input
                    {...register("date", { required: true })}
                    placeholder="Date"
                    type="date"
                    className="p-2 my-2 w-100 form-control"
                  />

                  <input
                    {...register("Rooms", { required: true })}
                    type="number"
                    placeholder="Rooms"
                    className="p-2 my-2 w-100 form-control"
                  />

                  <input
                    {...register("Country")}
                    defaultValue={country}
                    placeholder="Country"
                    className="p-2 my-2 w-100 form-control"
                  />

                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <input
                    type="submit"
                    value="SUBMIT"
                    className="btn w-100"
                    style={{
                      backgroundColor: "#f97150",
                      color: "#fff",
                      borderRadius: "6px",
                      border: "1px solid hidden",
                      outline: "none",
                      margin: "12px 0",
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
