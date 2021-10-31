import axios from "axios";
import { useForm } from "react-hook-form";
const AddTour = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //   const [newDate, setNewDate] = useState("");
  //   const date = moment().format("DD-MM-YYYY hh:mm:ss");
  //   setNewDate(date);

  const onSubmit = (data) => {
    axios.post("http://localhost:5000/tours/newTour", data).then((res) => {
      if (res.data.insertedId) {
        alert("Tour Added Successfully");
      }
      reset();
    });
  };
  return (
    <div className="mt-5 pt-4">
      <div className="contaiener my-5 ">
        <h4 className="fw-bolder primary-color text-center my-5">
          Add New Tour Here:
        </h4>
        <div className="newtour-form">
          <div className="w-50 mx-auto">
            <div className=" p-4 border border">
              <div>
                <form
                  className="row gx-4"
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="col-md-6">
                    <input
                      {...register("title")}
                      placeholder="Title"
                      className="p-2 my-2 w-100 form-control"
                    />

                    <input
                      {...register("country", { required: true })}
                      placeholder="Country"
                      className="p-2 my-2 w-100 form-control"
                    />

                    <input
                      {...register("price", { required: true })}
                      type="number"
                      placeholder="Price"
                      className="p-2 my-2 w-100 form-control"
                    />

                    <input
                      {...register("date", { required: true })}
                      placeholder="Date"
                      type="date"
                      className="p-2 my-2 w-100 form-control text-secondary"
                    />
                    <input
                      {...register("img")}
                      placeholder="Image URL"
                      className="p-2 my-2 w-100 form-control"
                    />
                    <input
                      {...register("description")}
                      placeholder="Description"
                      className="p-2 my-2 w-100 form-control"
                    />
                  </div>

                  <div
                    className="col-md-6"
                    style={{ display: "felx", flexDirection: "column" }}
                  >
                    {" "}
                    <input
                      {...register("rating", { required: true })}
                      type="number"
                      placeholder="Rating"
                      className="p-2 my-2 w-100 form-control"
                    />
                    <input
                      {...register("duration")}
                      placeholder="Duration"
                      className="p-2 my-2 w-100 form-control"
                    />
                    <input
                      {...register("reviews")}
                      placeholder="Reviews"
                      type="number"
                      className="p-2 my-2 w-100 form-control"
                    />
                    <input
                      {...register("maxPeople")}
                      placeholder="Maximum People"
                      className="p-2 my-2 w-100 form-control"
                    />
                    <input
                      {...register("minAge")}
                      placeholder="Minimum Age"
                      className="p-2 my-2 w-100 form-control"
                    />
                    <input
                      {...register("pickup")}
                      placeholder="Pick Up"
                      className="p-2 my-2 w-100 form-control"
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                  </div>
                  <input
                    type="submit"
                    value="Add New Tour"
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

export default AddTour;
