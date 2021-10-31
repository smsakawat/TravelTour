import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleBook from "../../components/SingleBook/SingleBook";

const ManageAllBookings = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [noBookings, setNoBookings] = useState(false);

  useEffect(() => {
    setSpinner(true);
    axios
      .get("https://calm-reef-90911.herokuapp.com/allBookings")
      .then((res) => {
        setSpinner(false);
        if (res.data.length) {
          setNoBookings(false);
          setAllBookings(res.data);
        } else {
          setNoBookings(true);
        }
      });
  }, []);
  //   remove bookings if admin wants
  // remove tours if user wants
  const handleDelete = (id) => {
    const result = window.confirm("Are You Sure?Yes or NO");
    if (result) {
      axios
        .delete(`https://calm-reef-90911.herokuapp.com/deleteBooking/${id}`)
        .then((res) => {
          if (res.data.deletedCount) {
            const remainingBookings = allBookings.filter(
              (singleBook) => singleBook.id !== id
            );
            setAllBookings(remainingBookings);
            if (remainingBookings.length) {
              setNoBookings(false);
            } else {
              setNoBookings(true);
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
            {noBookings ? (
              <div className="my-5">
                <h3 className="fw-bold">
                  Sorry You Don't Have Any Booked Tours
                </h3>
              </div>
            ) : (
              <div className="my-4">
                {allBookings.length &&
                  allBookings.map((singleBook, index) => (
                    <SingleBook
                      key={index}
                      handleDelete={handleDelete}
                      singleBook={singleBook}
                    ></SingleBook>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageAllBookings;
