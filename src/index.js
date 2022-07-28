import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavbarComp from "./Home/NavbarComp.js";
import Footer from "./Home/Footer"
import Home from "./Home/Home.js";
import Contact from "./Contact/Contact.js";
import Menu from "./Menu/Menu.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="menu" element={<Menu />}/>
          <Route path="contact" element={<Contact />}/>
          </Routes>
        <Footer />
      </div>
    </Router>

  );
};

ReactDOM.render(<App />, document.querySelector(".root"));
