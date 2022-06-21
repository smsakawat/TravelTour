import "aos/dist/aos.css"; // You can also use <link> for styles
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import SignUp from "./components/Signup/Signup";
import AuthProvider from "./Context/AuthProvider";
import Booking from "./Pages/Booking/Booking";
import Home from "./Pages/Home/Home";
import MyTours from "./Pages/MyTours/MyTours";
import NotFound from "./Pages/NotFound/NotFound";

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
              <MyTours />
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
