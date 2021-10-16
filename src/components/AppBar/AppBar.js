import React from "react";
import "./AppBar.css";

import logo from "./AppBar.logo.svg";
//import NotFound from './NotFound';

const AppBar = () => (
  <nav className="AppBar">
    <img className="AppBar-logo" src={logo} aria-label="people" alt="People" />
    <hr className="grow" />
  </nav>
);

export default AppBar;
