import { getAuth, updateProfile } from "@firebase/auth";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const history = useHistory();
  const location = useLocation();

  const auth = getAuth();
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  // redire-uri
  const redirect_uri = location.state?.from || "/home";

  // show  success message
  const notify = () => {
    toast.success("Welcome To TravelTour!!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // destructuring from use auth
  const { signinWithGoogle, signUpUsingEmailAndPass } = useAuth();
  // sign up with google
  const handleGoogleSignUP = () => {
    signinWithGoogle()
      .then((result) => {
        notify();
        history.push(redirect_uri);
      })
      .catch((err) => {});
  };

  // sign up on from submit
  const hanldeFormSubmit = (e) => {
    setError("");
    e.preventDefault();

    if (values.name === "" || values.email === "" || values.password === "") {
      return;
    } else {
      signUpUsingEmailAndPass(values.email, values.password, values.name)
        .then((result) => {
          updateProfile(auth.currentUser, {
            displayName: values.name,
          }).then(() => {
            notify();
            history.push(redirect_uri);
          });
        })
        .catch((error) => {
          setError("Password should be at least 8 character");
        });
    }
  };

  return (
    <div
      className="text-center mt-5 py-5"
      style={{ backgroundColor: "#e0e0e0" }}
    >
      <h2 className="my-4 fw-bold">Sign Up</h2>
      <p className=" mt-2 primary-color lead fw-bold">
        Sign Up with Email & Password
      </p>

      <div className=" w-50 w-md-25 mx-auto">
        <Form onSubmit={hanldeFormSubmit}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="name" visuallyHidden>
                Your Name
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  onBlur={(e) => {
                    setValues({ ...values, name: e.target.value });
                  }}
                  type="text"
                  autoComplete="current-text"
                  id="name"
                  placeholder="Enter your name"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  onBlur={(e) => {
                    setValues({ ...values, email: e.target.value });
                  }}
                  type="email"
                  autoComplete="current-email"
                  id="email"
                  placeholder="Enter your email address"
                />
              </InputGroup>
            </Col>
          </Row>

          <Row className="mt-2">
            <Col className="text-start">
              <Form.Label htmlFor="password" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  onBlur={(e) => {
                    setValues({ ...values, password: e.target.value });
                  }}
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
              <p className="text-danger">{error}</p>
            </Col>
          </Row>

          <button
            type="submit"
            className="w-100 mt-3 btn"
            style={{
              backgroundColor: "#f97150",
              border: "none",
              outline: "none",
              color: "#fff",
            }}
          >
            <span className="fw-bold">SIGN UP</span>
          </button>
        </Form>
      </div>
      <p className="mt-2">
        <NavLink className="text-decoration-none" to="/login">
          <span className="text-secondary"> Already have an account</span>?
          Please login!
        </NavLink>

        <p className="text-secondary text-center my-3">
          or sign-up with google
        </p>
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <Button
          onClick={handleGoogleSignUP}
          variant="outlined"
          style={{
            border: "2px solid lightgray",
            backgroundColor: "#fff",
            padding: "6px 16px",
            borderRadius: 9,
            color: "gray",
          }}
        >
          <span className="me-2">
            <FcGoogle style={{ fontSize: "2em" }} />
          </span>
          Sign up with Google
        </Button>
      </div>
    </div>
  );
};

export default SignUp;
