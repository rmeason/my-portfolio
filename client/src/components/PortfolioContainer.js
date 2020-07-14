import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


// class PortfolioContainer extends Component {
//     state = {
//       currentPage: ""
//     };
  

// handlePageChange = page => {
//     this.setState({ currentPage: page });
//   };

//   renderPage = () => {
//     if (this.state.currentPage === "Home") {
//       return <Home />;
//     } else if (this.state.currentPage === "Portfolio") {
//       return <Portfolio />;
//     } else if (this.state.currentPage === "Contact") {
//       return <Contact />;
//     } else {
//         return <About />
//     }
//   };

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

            <Route path="/home">
                <Home />
            </Route>

            <Footer />
        </div>  
      </Router>
    );
}

export default PortfolioContainer;
