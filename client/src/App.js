import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons";

import PrivateRoute from "./components/common/PrivateRoute";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import EmailVerification from "./components/auth/Email_verification";
// import Dashboard from "./components/dashboard/Dashboard";

import CreateProfile from "./components/create-profile/CreateProfile";
import ViewCourseDetails from "./components/add-swap-delete-course/viewcoursedetails";
import AddSwapDeleteWrapper from "./components/add-swap-delete-course/add-swap-del-wrapper";
import AddCourses from "./components/add-swap-delete-course/addcourses";
import CreateCourseWrapper from "./components/create-course/createcoursewrapper";
import StudentDashboard from "./components/cards/studentdashboard";
import ProfessorDashboard from "./components/cards/ProfessorDashboard";
import RegistrarDashboard from "./components/cards/RegistrarDashboard";
import ViewClassScheduleWrapper from "./components/class-schedule/viewclassschedulewrapper";
import DashBoardLogic from "./components/cards/DashBoardlogic";
import CreateAdminCourseWrapper from "./components/create-course/createadmincoursewrapper";
import DeleteAdminCourseWrapper from "./components/create-course/deleteadmincoursewrapper";
import ToDoWrapper from "./components/to-do/todowrapper";
import AddToDo from "./components/to-do/addtodo";
import AddHolds from "./components/holds/addholds";
import HoldsWrapper from "./components/holds/holdswrapper";
import Payment from "./components/payment/Payment";

import ConfirmationPage from "./components/payment/ConfirmationPage";
import PdfPage from "./components/payment/PdfPage.jsx";


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
                component={DashBoardLogic}
              />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/payment" component={Payment} />
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
                path="/addtodo/:university_id"
                component={AddToDo}
              />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/addholds/:university_id"
                component={AddHolds}
              />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/create-course"
                component={CreateCourseWrapper}
              />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/todolist" component={ToDoWrapper} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/holds" component={HoldsWrapper} />
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
                path="/ViewSchedule"
                component={ViewClassScheduleWrapper}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/CreateCourse"
                component={CreateCourseWrapper}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/create-admin-course"
                component={CreateAdminCourseWrapper}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/delete-admin-course"
                component={DeleteAdminCourseWrapper}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/StudentDashboard"
                component={StudentDashboard}
              />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/ProfessorDashboard"
                component={ProfessorDashboard}
              />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/RegistrarDashboard"
                component={RegistrarDashboard}
              />
            </Switch>

            <Switch>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>


            <Switch>
            <PrivateRoute
            exact
            path="/confirmationpage"
            component={ConfirmationPage}
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
