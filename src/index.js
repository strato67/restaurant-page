import React from "react";
import ReactDOM from "react-dom";

import NavbarComp from "./Home/NavbarComp.js";
import Footer from "./Home/Footer"
import Home from "./Home/Home.js";
import Contact from "./Contact/Contact.js";
import Menu from "./Menu/Menu.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const App = () => {
  return (
    <div>
        <NavbarComp />
        {/*<Home />*/}
        <Menu />
        {/*<Contact />*/}
        
        <Footer />

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".root"));
