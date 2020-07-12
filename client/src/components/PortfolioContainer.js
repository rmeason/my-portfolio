import React, { Component } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


class PortfolioContainer extends Component {
    state = {
      currentPage: ""
    };
  

handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else {
        return <About />
    }
  };

  render() {
    return (
      <wrapper>
        <div>
          <Header />
          <TopBar
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />
          {this.renderPage()}
        </div>        
        <Footer />
      </wrapper>
    );
  }
}

export default PortfolioContainer;
