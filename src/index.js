import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./Navbar.js";
import './style.css';

const App = () => {
  return (
    <div>
        <Navbar />
        <div>Welcome to my-webpack-react-starter</div>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".root"));