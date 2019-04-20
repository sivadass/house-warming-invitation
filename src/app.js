import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import BusRoutes from "./pages/bus-routes";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <div className="main-container">
            <Route path="/" exact component={Home} />
            <Route path="/bus-routes/" component={BusRoutes} />
            <Route path="/contact/" component={Contact} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
