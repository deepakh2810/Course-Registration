import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./components/layout/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
