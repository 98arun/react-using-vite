import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

const MainComp = (props: any) => {
  return (
    <>
      <p>Hey, i am in mainComp </p>;
      <Routes>
        <Route path="/*" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default MainComp;
