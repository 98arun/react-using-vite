import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ClassComp from "./ClassComp";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <ClassComp />
  </React.StrictMode>,
  document.getElementById("root")
);
