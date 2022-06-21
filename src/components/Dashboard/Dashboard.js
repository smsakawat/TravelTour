import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import FestivalIcon from "@mui/icons-material/Festival";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  Link,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import AddTour from "../../Pages/AddTour/AddTour";
import ManageAllBookings from "../../Pages/ManageAllBookings/ManageAllBookings";
import UpdateTourDetails from "../../Pages/UpdateTourDetails/UpdateTourDetails";
import UpdateTours from "../../Pages/UpdateTours/UpdateTours";

import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import "./Dashboard.css";
import MakeAdmin from "./MakeAdmin/MakeAdmin";
const drawerWidth = 240;

function Dashboard(props) {
  const history = useHistory();
  const { url, path } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { user, admin, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <div>
        <Toolbar>
          <h3
            style={{
              fontWeight: "800",
              fontStyle: "italic",
              fontSize: "1.7rem",
            }}
          >
            TravelTour
          </h3>
        </Toolbar>
        <Divider />
        {/* user dashboard starts */}
        {/* {user.email && !admin && (
          <List>
            <ListItem button onClick={() => history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Link to="/" className="link">
                <ListItemText>Home</ListItemText>
              </Link>
            </ListItem>
            <ListItem button onClick={() => history.push(`${url}/myTours`)}>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <Link to={`${url}/myTours`} className="link">
                <ListItemText>My Tours</ListItemText>
              </Link>
            </ListItem>
          </List>
        )} */}
        {/* admin dashboard starts */}
        {user.email && admin && (
          <>
            <ListItem button onClick={() => history.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Link to="/" className="link">
                <ListItemText>Home</ListItemText>
              </Link>
            </ListItem>
            <List>
              <ListItem button onClick={() => history.push(`${url}/makeAdmin`)}>
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <Link to={`${url}/makeAdmin`} className="link">
                  <ListItemText>Make Admin</ListItemText>
                </Link>
              </ListItem>
              <ListItem button onClick={() => history.push(`${url}/addTour`)}>
                <ListItemIcon>
                  <FestivalIcon></FestivalIcon>
                </ListItemIcon>
                <Link to={`${url}/addTour`} className="link">
                  <ListItemText>Add Tour</ListItemText>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={() => history.push(`${url}/manageBookings`)}
              >
                <ListItemIcon>
                  <ManageAccountsIcon />
                </ListItemIcon>
                <Link to={`${url}/manageBookings`} className="link">
                  <ListItemText>Manage Bookings</ListItemText>
                </Link>
              </ListItem>
              <ListItem
                button
                onClick={() => history.push(`${url}/updateTours`)}
              >
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <Link to={`${url}/updateTours`} className="link">
                  <ListItemText>Update Tours </ListItemText>
                </Link>
              </ListItem>
            </List>
          </>
        )}

        <Divider />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "30px",
        }}
      >
        <Button variant="contained" color="error" onClick={logOut}>
          Logout
        </Button>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", bagroundColor: "#ddd" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#3a3a3a",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        className="dash-container"
        style={{ bagroundColor: "#ddd", marginTop: 0 }}
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        style={{
          backgroundColor: "#fff",
          minHeight: "100vh",
          color: "#bbbbbb",
        }}
        component="main"
        sx={{
          flexGrow: 1,

          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          {user.email && !admin && (
            <>
              {/* <Route exact path="/dashboard">
                <MyTours />
              </Route> */}
              {/* <Route exact path={path}>
                <MyTours />
              </Route>
              <Route path={`${path}/myTours`}>
                <MyTours />
              </Route> */}
            </>
          )}
          {user.email && admin && (
            <>
              {/* <Route exact path="/dashboard">
                <ManageAllBookings />
              </Route> */}
              <Route exact path={path}>
                <ManageAllBookings />
              </Route>

              <Route exact path={`${path}"/updateDetails/:id"`}>
                <UpdateTourDetails />
              </Route>
              <Route exact path={`${path}/manageBookings`}>
                <ManageAllBookings />
              </Route>
              <Route exact path={`${path}/updateTours`}>
                <UpdateTours />
              </Route>
              <Route exact path={`${path}/makeAdmin`}>
                <MakeAdmin />
              </Route>
              <Route exact path={`${path}/addTour`}>
                <AddTour />
              </Route>
            </>
          )}
        </Switch>
      </Box>
    </Box>
  );
}

export default Dashboard;
