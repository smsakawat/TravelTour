import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
const MakeAdmin = () => {
  const { admin } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   const [newDate, setNewDate] = useState("");
  //   const date = moment().format("DD-MM-YYYY hh:mm:ss");
  //   setNewDate(date);

  const [error, setError] = useState(false);

  const onSubmit = (data) => {
    setError(false);
    if (data.email === "") {
      setError(true);
      return;
    }
    axios
      .put("https://calm-reef-90911.herokuapp.com/users", data)
      .then((res) => {
        if (res.data.modifiedCount) {
          alert("Admin added succesfully");
        }
      });
    reset();
  };
  // console.log(admin);
  return (
    <>
      <div style={{ backgroundColor: "#e0e0e0", minHeight: "90vh" }}>
        <div className="container py-2 ">
          <h4 className="fw-bolder primary-color text-center my-3">
            Make a Admin:
          </h4>

          <div
            className="p-5 border border-2 w-50 mx-auto"
            style={{ backgroundColor: "#fff", borderRadius: "6px" }}
          >
            <form
              className="row"
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div style={{ width: "100%" }}>
                <input
                  {...register("email")}
                  placeholder="enter email here"
                  className="form-control  mb-2"
                />
                {error && (
                  <p style={{ color: "red", letterSpacing: "2px" }}>
                    input field cannot be empty
                  </p>
                )}
                <input
                  type="submit"
                  value="Make Admin"
                  className="btn"
                  style={{
                    width: "100%",
                    backgroundColor: "#f97150",
                    color: "#fff",
                    borderRadius: "6px",
                    border: "1px solid hidden",
                    outline: "none",
                    margin: "12px 0",
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MakeAdmin;
