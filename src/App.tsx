import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation";
import "./styles/App.css";
import APIPlayground from "./APIPlayground/APIPlayground";

class App extends Component<any, any> {
  render() {
    return (
      <Router>
        <section className="app-wrapper">
          <Navigation />
          <APIPlayground />
        </section>
      </Router>
    );
  }
}

export default App;
