import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./Navbar.js";
import './styles/style.css';

const App = () => {
  return (
    <div>
        <Navbar />
        <div className="text-3xl">Welcome to my-webpack-react-starter</div>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".root"));