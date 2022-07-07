import React from "react";
import ReactDOM from "react-dom";

import NavbarComp from "./NavbarComp.js";
import Footer from "./Footer"
import Home from "./Home.js";
import Contact from "./Contact.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const App = () => {
  return (
    <div>
        <NavbarComp />
        {/*<Home />*/}
        
        <Contact />
        <Footer />

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".root"));
