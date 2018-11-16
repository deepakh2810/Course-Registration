import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

import PrivateRoute from "./components/common/PrivateRoute";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import EmailVerification from "./components/auth/Email_verification";
import Dashboard from "./components/dashboard/Dashboard";

import CreateProfile from "./components/create-profile/CreateProfile";
import ViewCourseDetails from "./components/add-swap-delete-course/viewcoursedetails";
import AddSwapDeleteWrapper from "./components/add-swap-delete-course/add-swap-del-wrapper";
import CreateCourseWrapper from "./components/create-course/createcoursewrapper";
import StudentDashboard from "./components/cards/studentdashboard";
import ProfessorDashboard from "./components/cards/ProfessorDashboard";
import RegistrarDashboard from "./components/cards/RegistrarDashboard";
import DashboardLogic from "./components/cards/DashBoardLogic";
library.add(faStroopwafel);

//Check for token
if (localStorage.jwtToken) {
  // Set the auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticate
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  // const currentTime = Date.now() / 100;
  // if (decoded.exp < currentTime) {
  //   store.dispatch(logoutUser());
  //   // Clear current profile

  //   // Redirect to login
  //   window.location.href = "/login";
  // }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/verify" component={EmailVerification} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            <Switch>
              <PrivateRoute
                exact
                path="/dashboard"
                component={DashboardLogic}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/coursedetails/:coursenumber"
                component={ViewCourseDetails}
              />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/addcourses"
                component={AddSwapDeleteWrapper}
              />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/createnewcourse"
                component={CreateCourseWrapper}
              />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/dashboard"
                component={DashboardLogic}
              />
            </Switch>

           
           

            <Switch>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>
          
           
            <Footer />
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
