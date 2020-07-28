import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function PortfolioContainer() {

    return (
      <Router>
        <div>
          <Header />
          <TopBar  />
          
            <Route exact path={["/", "/about"]}>
                <About />
            </Route>

            <Route path="/portfolio">
                <Portfolio />
            </Route>

            <Route path="/contact">
                <Contact />
            </Route>

            <Footer />
        </div>  
      </Router>
    );
}

export default PortfolioContainer;
