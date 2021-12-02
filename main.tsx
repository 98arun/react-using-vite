import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import ClassComp from "./ClassComp";
import MeetHome from "./Molecules/Meet/MeetHome";
import ListHome from "./Molecules/List/ListHome";
import LifeCycle from "./ReactLifeCycle/LifeCycle";
import MainTV from "./DefaultProps/MainTV";
import Todo from "./ToDo/Todo";
import MoviesSearch from "./Movies/Movie";
import { BrowserRouter } from "react-router-dom";
import MainComp from "./Routing/MainComp";
import RouterComp from "./Routing/RouterComp";
import UseMemoComp from "./Hooks/UseMemo";
import UseEffectComp from "./Hooks/UseEffect";
import ClassContext from "./Contex";
import UseRef from "./Hooks/UseRef";
import store from "./Redux/store";
import MainRedux from "./Redux/Main";
import { Provider } from "react-redux";
import Navigation from "./Redux/Navigation";
import Cakes from "./Redux/Cakes";
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ClassComp /> */}
    {/* <MeetHome /> */}
    {/* <ListHome /> */}
    {/* <LifeCycle /> */}
    {/* <MainTV /> */}
    {/* <Todo /> */}
    {/* <MoviesSearch /> */}
    {/* <BrowserRouter>
      <MainComp />
    </BrowserRouter> */}
    {/* <RouterComp /> */}
    {/* <UseMemoComp /> */}
    {/* <UseEffectComp /> */}
    {/* <ClassContext /> */}
    {/* <UseRef /> */}
    <Provider store={store}>
      <Navigation />
      <Cakes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
