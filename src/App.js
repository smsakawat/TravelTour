import "aos/dist/aos.css"; // You can also use <link> for styles
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import SignUp from "./components/Signup/Signup";
import AuthProvider from "./Context/AuthProvider";
import AddTour from "./Pages/AddTour/AddTour";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home";
import ManageAllBookings from "./Pages/ManageAllBookings/ManageAllBookings";
import MyTour from "./Pages/MyTours/MyTours";
import NotFound from "./Pages/NotFound/NotFound";
import UpdateTourDetails from "./Pages/UpdateTourDetails/UpdateTourDetails";
import UpdateTours from "./Pages/UpdateTours/UpdateTours";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/booking/:id">
              <Booking />
            </PrivateRoute>
            <PrivateRoute exact path="/myTours">
              <MyTour />
            </PrivateRoute>
            <PrivateRoute path="/manageBookings">
              <ManageAllBookings />
            </PrivateRoute>
            <PrivateRoute exact path="/addTour">
              <AddTour />
            </PrivateRoute>
            <PrivateRoute path="/updateTours">
              <UpdateTours></UpdateTours>
            </PrivateRoute>
            <PrivateRoute path="/updateDetails/:id">
              <UpdateTourDetails />
            </PrivateRoute>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
