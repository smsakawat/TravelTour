import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();

  return (
    <div className="text-center my-5 py-5">
      <h2 className="my-4 fw-bold">Please Sign Up</h2>
      <p className=" mt-2 primary-color lead">Sign Up with Email & Password</p>
      <p className="text-danger text-center"></p>
      <div className="w-25 mx-auto">
        <Form>
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
                  type="password"
                  autoComplete="current-password"
                  id="password"
                  placeholder="Enter your password"
                />
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col className="text-start">
              <Form.Label htmlFor="photo" visuallyHidden>
                Your photo URL
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  type="text"
                  autoComplete="current-text"
                  id="photo"
                  placeholder="Enter your photoURL"
                />
              </InputGroup>
            </Col>
          </Row>
          <Button
            type="submit"
            className="w-100 mt-3"
            style={{
              backgroundColor: "#f97150",
              border: "none",
              outline: "none",
            }}
          >
            Sign UP
          </Button>
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
    </div>
  );
};

export default SignUp;
