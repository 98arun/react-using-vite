import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ClassComp from "./ClassComp";
import MeetHome from "./Molecules/Meet/MeetHome";
import ListHome from "./Molecules/List/ListHome";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClassComp /> */}
    {/* <MeetHome /> */}
    <ListHome />
  </React.StrictMode>,
  document.getElementById("root")
);
