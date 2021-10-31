import "aos/dist/aos.css"; // You can also use <link> for styles
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import SignUp from "./components/Signup/Signup";
import AuthProvider from "./Context/AuthProvider";
import AddTour from "./Pages/AddTour/AddTour";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home";
import ManageAllBookings from "./Pages/ManageAllBookings/ManageAllBookings";
import MyTour from "./Pages/MyTours/MyTours";
import UpdateTourDetails from "./Pages/UpdateTourDetails/UpdateTourDetails";
import UpdateTours from "./Pages/UpdateTours/UpdateTours";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking />
            </PrivateRoute>
            <PrivateRoute exact path="/mytours">
              <MyTour />
            </PrivateRoute>
            <PrivateRoute path="/allBooking">
              <ManageAllBookings />
            </PrivateRoute>
            <PrivateRoute exact path="/addtour">
              <AddTour />
            </PrivateRoute>
            <PrivateRoute path="/updatetours">
              <UpdateTours></UpdateTours>
            </PrivateRoute>
            <PrivateRoute path='/updateDetails/:id'>
              <UpdateTourDetails/>
            </PrivateRoute>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
