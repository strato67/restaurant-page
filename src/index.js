import React from "react";
import ReactDOM from "react-dom";

import NavbarComp from "./NavbarComp.js";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
        <NavbarComp />
        <div className="text-3xl">Welcome to my-webpack-react-starter</div>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(".root"));