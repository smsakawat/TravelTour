import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const { isLoading, setIsLoading, signInWithEmail, signinWithGoogle } =
    useAuth();

  const location = useLocation();
  const history = useHistory();
  // redirect user
  const redirect_ui = location.state?.from || "/";

  // show notification
  const notify = () => {
    toast.success("Login Successfull!", {
      // we can also change the notify by inline styles here
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  //    signin with email
  const handleSignInWithEmail = (e) => {
    e.preventDefault();

    if (values.email === "" || values.password === "") {
      setError("Input filelds cannot be empty");
      return;
    }
    signInWithEmail(values.email, values.password)
      .then((result) => {
        notify();
        setError("");
        history.push(redirect_ui);

        // console.log(result.user);
      })
      .catch((error) => {
        setError("Invalid Email or Password");
      });
  };
  //   sign in with google
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signinWithGoogle()
      .then((result) => {
        notify();
        history.push(redirect_ui);
      })
      .catch((error) => {})
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="text-center my-5 py-5">
      <h2 className="my-4 fw-bold">Please Login</h2>
      <p className=" mt-2 primary-color">Login with Email & Password</p>
      <p className="text-danger text-center"></p>
      <div className="w-25 mx-auto">
        <Form onSubmit={handleSignInWithEmail}>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="email" visuallyHidden>
                Your Email Address
              </Form.Label>
              <InputGroup className="mb-1">
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
          <Row className="mt-3">
            <Col className="text-start">
              <Form.Label htmlFor="password" visuallyHidden>
                Your Password
              </Form.Label>
              <InputGroup className="mb-1">
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
            </Col>
            <p className="text-danger my-1">{error}</p>
          </Row>

          <button
            type="submit"
            className="btn mt-3 w-100"
            style={{
              backgroundColor: "#f97150",
              padding: "10px 14px",
              border: "1px solid hidden",
              borderRadius: "6px",
              outline: "none",
              color: "#fff",
            }}
          >
            Login
          </button>
        </Form>
      </div>
      <p className="mt-2">
        <span className="text-secondary">Not have an account?</span>
        <NavLink className="text-decoration-none" to="/signup">
          ? Please Sign up!
        </NavLink>
      </p>

      <p className="secondary-color"> or Login with Google</p>
      <div className="d-flex justify-content-center align-items-center">
        <Button
          onClick={handleGoogleSignIn}
          variant="outlined"
          style={{
            border: "2px solid lightgray",
            backgroundColor: "transparent",
            padding: "6px 16px",
            borderRadius: 9,
            color: "gray",
          }}
        >
          <span className="me-2">
            <FcGoogle style={{ fontSize: "1.6em" }} />
          </span>
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
