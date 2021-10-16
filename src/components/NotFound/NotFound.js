import React from "react";
import { Link } from "react-router-dom";
import errorpage from "./error-2129569_1920.jpg";
import "./error.css";

const NotFound = () => (
  <div>
    <h1 className="Title">404 - Not Found!</h1>
    <img
      className="ErrorPage"
      src={errorpage}
      aria-label="errorpage"
      alt="errorpage"
    />
    <br />
    <div className="Indication">
      <Link to="/">GO my Application</Link>
    </div>
  </div>
);

export default NotFound;
