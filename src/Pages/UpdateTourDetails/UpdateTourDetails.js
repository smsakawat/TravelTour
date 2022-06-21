import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";

const UpdateTourDetails = () => {
  const { id } = useParams();
  const [tour, setTour] = useState({});

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
    axios
      .get(`https://calm-reef-90911.herokuapp.com/booking/${id}`)
      .then((res) => {
        setTour(res.data);
      });
  }, []);

  //   handle updating tour on submit
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios
      .put(`https://calm-reef-90911.herokuapp.com/update/tour/${id}`, data)
      .then((res) => {
        if (res.data) {
          console.log(res.data);
          notify();
          reset();
        }
      });
  };

  // initialize toastify
  toast.configure();
  // show message on logout
  const notify = () => {
    toast.info("Tour Updated Successfully!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <Header></Header>
      <div className=" py-5" style={{ backgroundColor: "#e0e0e0" }}>
        <div className="container py-5">
          <h4 className="fw-bolder primary-color text-center ">
            Update Your Tour Details Here:
          </h4>
          <p className="fw-bold text-secondary w-50 mx-auto">
            Every field should Be Updated or keep the default details with just
            one click in the input field
          </p>
          <div className="newtour-form ">
            <div className="w-75 w-md-50 mx-auto">
              <div
                className=" p-5 border border "
                style={{ backgroundColor: "#fff", borderRadius: "6px" }}
              >
                <div>
                  <form
                    className="row gx-4"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="col-md-6">
                      <div className="text-start">
                        <label
                          htmlFor="title"
                          className="form-label text-start"
                        >
                          Title
                        </label>
                        <input
                          defaultValue={tour.title}
                          {...register("title")}
                          placeholder="Title"
                          className="p-2 my-2 w-100 form-control"
                        />
                      </div>

                      <div className="text-start">
                        <label
                          htmlFor="title"
                          className="form-label text-start"
                        >
                          Country
                        </label>
                        <input
                          defaultValue={tour.country}
                          {...register("country")}
                          placeholder="Country"
                          className="p-2 my-2 w-100 form-control"
                        />
                      </div>
                      <div className="text-start">
                        <label
                          htmlFor="price"
                          className="form-label text-start"
                        >
                          Price
                        </label>
                        <input
                          defaultValue={price}
                          {...register("price")}
                          type="text"
                          className="p-2 my-2 w-100 form-control"
                        />
                      </div>
                      <div className="text-start">
                        {" "}
                        <label htmlFor="date" className="form-label text-start">
                          Date
                        </label>
                        <input
                          defaultValue={date}
                          {...register("date")}
                          placeholder="Date"
                          type="text"
                          className="p-2 my-2 w-100 form-control text-secondary"
                        />
                      </div>

                      <div className="text-start">
                        {" "}
                        <label htmlFor="img" className="form-label text-start">
                          Tour Image
                        </label>
                        <input
                          defaultValue={img}
                          {...register("img")}
                          placeholder="Image URL"
                          className="p-2 my-2 w-100 form-control"
                        />
                      </div>

                      <div className="text-start">
                        <label
                          htmlFor="description"
                          className="form-label text-start"
                        >
                          Descripton
                        </label>
                        <input
                          defaultValue={description}
                          {...register("description")}
                          placeholder="Description"
                          className="p-2 my-2 w-100 form-control"
                        />
                      </div>
                    </div>

                    <div
                      className="col-md-6"
                      style={{ display: "felx", flexDirection: "column" }}
                    >
                      <div className="text-start">
                        <label
                          htmlFor="rating"
                          className="form-label text-start"
                        >
                          rating
                        </label>
                        <input
                          defaultValue={rating}
                          {...register("rating")}
                          type="number"
                          placeholder="Rating"
                          className="p-2 my-2 w-100 form-control"
                        />
                      </div>

                      <div className="text-start">
                        <label
                          htmlFor="duration"
                          className="form-label text-start"
                        >
                          Duration
                        </label>
                        <input
                          defaultValue={duration}
                          {...register("duration")}
                          placeholder="Duration"
                          className="p-2 my-2 w-100 form-control"
                        />
                      </div>

                      <div className="text-start">
                        <label
                          htmlFor="reviews"
                          className="form-label text-start"
                        >
                          Reviews
                        </label>
                        <input
                          defaultValue={reviews}
                          {...register("reviews")}
                          placeholder="Reviews"
                          type="number"
                          className="p-2 my-2 w-100 form-control"
                        />
                      </div>

                      <div className="text-start">
                        <label
                          htmlFor="max People"
                          className="form-label text-start"
                        >
                          Max People
                        </label>
                        <input
                          defaultValue={maxPeople}
                          {...register("maxPeople")}
                          placeholder="Maximum People"
                          className="p-2 my-2 w-100 form-control"
                        />
                      </div>

                      <div className="text-start">
                        <label
                          htmlFor="min age"
                          className="form-label text-start"
                        >
                          Min Age{" "}
                        </label>
                        <input
                          defaultValue={minAge}
                          {...register("minAge")}
                          placeholder="Minimum Age"
                          className="p-2 my-2 w-100 form-control"
                        />
                      </div>

                      <div className="text-start">
                        <label
                          htmlFor="pick-up"
                          className="form-label text-start"
                        >
                          Pick Up{" "}
                        </label>
                        <input
                          defaultValue={pickup}
                          {...register("pickup")}
                          placeholder="Pick Up"
                          className="p-2 my-2 w-100 form-control"
                        />
                      </div>

                      {errors.exampleRequired && (
                        <span>This field is required</span>
                      )}
                    </div>
                    <input
                      type="submit"
                      value="UPDATE TOUR"
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
      <Footer></Footer>
    </>
  );
};

export default UpdateTourDetails;
