import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

import PrivateRoute from "./components/common/PrivateRoute";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import EmailVerification from "./components/auth/Email_verification";
import Dashboard from "./components/dashboard/Dashboard";
import CreateProfile from "./components/create-profile/CreateProfile";
import Addswapdelete from "./components/addswapdelete/addswapdel";


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
          {/* <div className="App"> */}

            <Navbar />
            <Route exact path="/" component={LandingPage} />
            {/* <div className="container-fluid"> */}
              <Route exact path="/verify" component={EmailVerification} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>

              <Switch>
                <PrivateRoute exact path="/Addswapdelete" component={Addswapdelete} />
              </Switch>

              

          

              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>

            
            <Footer />
          {/* </div> */}
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
