import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ClassComp from "./ClassComp";
import MeetHome from "./Meet/MeetHome";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClassComp /> */}
    <MeetHome />
  </React.StrictMode>,
  document.getElementById("root")
);
