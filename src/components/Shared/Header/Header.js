import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logott.png";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const { user, logOut } = useAuth();

  const [scrollNavbar, setScrollNavbar] = useState(false);

  const onScrollNavbar = () => {
    if (window.scrollY >= 50) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };
  // change navbar on scroll
  window.addEventListener("scroll", onScrollNavbar);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
        className={
          scrollNavbar ? "shadow-sm navbar-scrolled" : "shadow-none no-scroll"
        }
      >
        <Container>
          <Navbar.Brand onClick={() => history.push("/home")}>
            <img
              alt=""
              src={logo}
              height="35"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto  ">
              {" "}
              <Nav.Link
                as={Link}
                to="/home"
                className="navitem"
                style={{
                  fontWeight: "700",
                  fontSize: "15px",
                  paddingRight: 20,
                }}
              >
                HOME
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/home"
                className="navitem"
                style={{
                  fontWeight: "700",
                  fontSize: "15px",
                  paddingRight: 20,
                }}
              >
                ABOUT US
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="all-tours"
                style={{
                  fontWeight: "700",
                  fontSize: "15px",
                  paddingRight: 20,
                  marginRight: !user?.email ? "250px" : "",
                }}
              >
                BLOGS
              </Nav.Link>
              {user?.email && (
                <Nav.Link
                  as={Link}
                  to="/mytours"
                  style={{
                    fontWeight: "700",
                    fontSize: "15px",
                    paddingRight: 20,
                  }}
                >
                  MY TOURS
                </Nav.Link>
              )}
              {user?.email && (
                <NavDropdown
                  title="ADMIN"
                  id="admin-dashboard"
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    paddingRight: 20,
                    marginRight: "140px",
                  }}
                >
                  <NavDropdown.Item onClick={() => history.push("/allBooking")}>
                    Manage All Bookings
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => history.push("/addtour")}>
                    Add New Tour
                  </NavDropdown.Item>
                </NavDropdown>
              )}
              {user.email ? (
                <>
                  <Navbar.Text>
                    <span className="me-3">{user?.displayName}</span>
                  </Navbar.Text>
                  <Button
                    variant="text"
                    endIcon={<LogoutTwoToneIcon />}
                    style={{ color: "#f97150" }}
                    onClick={() => logOut()}
                  >
                    LogOUt
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link
                    as={Link}
                    to="signup"
                    style={{
                      fontWeight: "700",
                      fontSize: "15px",
                      paddingRight: 20,
                    }}
                  >
                    <span className="me-2">
                      <AccountCircleIcon />
                    </span>
                    Sign Up
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="login"
                    style={{
                      fontWeight: "700",
                      fontSize: "15px",
                      paddingRight: 20,
                    }}
                  >
                    <span className="me-2">
                      <LoginIcon />
                    </span>
                    LogIn
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
