import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import google from "../../images/google.png";

const Login = () => {
  const { signInWithGoogle, setIsLoading } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  //   sign-in with google
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        if (result.user) {
          console.log(result.user);
          alert("login done");
          history.push(redirect_uri);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="text-center my-5 py-5">
      <h2 className="my-4 fw-bold">Please Login</h2>
      <p className=" mt-2 primary-color">Login with Email & Password</p>
      <p className="text-danger text-center"></p>
      <div className="w-25 mx-auto">
        <Form>
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
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
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
      <p className="mt-1">Or</p>
      <p className="secondary-color"> Login with Google</p>
      <div className="d-flex justify-content-center align-items-center">
        <span
          className="border border-3 p-3 rounded-3"
          style={{ cursor: "pointer" }}
          onClick={handleGoogleSignIn}
        >
          <img src={google} alt="" style={{ width: "1.5em" }} />
        </span>
      </div>
    </div>
  );
};

export default Login;
