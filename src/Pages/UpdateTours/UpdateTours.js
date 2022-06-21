import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleUpdateTour from "../../components/SingleUpdateTour/SingleUpdateTour";
import "./UpdateTours.css";

const UpdateTours = () => {
  const [tours, setTours] = useState([]);
  const [showSpinner, setShowSpinner] = useState(false);
  const [noTours, setNoTours] = useState(false);

  useEffect(() => {
    setShowSpinner(true);
    axios.get("https://calm-reef-90911.herokuapp.com/tours").then((res) => {
      setShowSpinner(false);
      setTours(res.data);
    });
  }, []);
  // initialize toastify
  toast.configure();
  // show message on logout
  const notify = () => {
    toast.info("Tour Deleted Successfully!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // remove bookings if user wants
  const handleDelete = (id) => {
    const result = window.confirm("Are You Sure To Delete This Tour?");
    if (result) {
      axios
        .delete(`https://calm-reef-90911.herokuapp.com/deletetour/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            const reminingTours = tours.filter((tour) => tour._id !== id);
            setTours(reminingTours);
            notify();
            if (reminingTours.length) {
              setNoTours(false);
            } else {
              setNoTours(true);
            }
          }
        });
    }
  };
  return (
    <div className="pb-3">
      <div className="update-img d-flex justify-content-center align-items-center">
        <h3 className="fw-bolder text-light">Update or Delete Tours</h3>
      </div>
      <div className="container py-4">
        <div className="py-5" id="tours">
          {showSpinner ? (
            <Spinner animation="border" variant="secondary" className="my-5" />
          ) : (
            <div className="row g-5">
              {tours.map((tour) => (
                <SingleUpdateTour
                  handleDelete={handleDelete}
                  key={tour._id}
                  tour={tour}
                ></SingleUpdateTour>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateTours;
