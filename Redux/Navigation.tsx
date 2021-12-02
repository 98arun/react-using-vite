import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Main from "./Main";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Link1" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
