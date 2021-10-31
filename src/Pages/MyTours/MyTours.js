import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import MyTour from "../../components/MyTour/MyTour";
import useAuth from "../../hooks/useAuth";

const MyTours = () => {
  const { user } = useAuth();
  const [myTours, setMyTours] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [noTours, setNoTours] = useState(false);
  // const [isDeleted, setIsDeleted] = useState(false);

  // loading specific users data
  useEffect(() => {
    setSpinner(true);
    axios
      .get(`https://calm-reef-90911.herokuapp.com/myTours/${user?.email}`)
      .then((res) => {
        setSpinner(false);
        if (res.data.length) {
          setNoTours(false);
          setMyTours(res.data);
        } else {
          setNoTours(true);
        }
      });
  }, [user]);
  // remove bookings if user wants
  const handleDelete = (id) => {
    const result = window.confirm("Are You Sure To Delete This Booking?");
    if (result) {
      axios
        .delete(`https://calm-reef-90911.herokuapp.com/deleteBooking/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            const reminingTours = myTours.filter((myTour) => myTour.id !== id);
            setMyTours(reminingTours);
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
    <div>
      <div className="container my-5 py-5">
        {spinner ? (
          <div className="my-5 py-5 d-flex justify-content-center align-items-center">
            <Spinner className="my-5" animation="grow" />
          </div>
        ) : (
          <div className="w-75 mx-auto">
            {noTours ? (
              <div className="my-5">
                <h3 className="fw-bold">
                  Sorry You Don't Have Any Booked Tours
                </h3>
              </div>
            ) : (
              <div className="my-4">
                {myTours.map((myTour, index) => (
                  <MyTour
                    key={index}
                    handleDelete={handleDelete}
                    myTour={myTour}
                  ></MyTour>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTours;
