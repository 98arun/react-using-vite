import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

const RouterComp = (props: any) => {
  var paddingLeft = { paddingLeft: "10px" };
  return (
    <BrowserRouter>
      <Link to="/menu1">Menu 1</Link>
      <Link to="/menu2" style={paddingLeft}>
        Menu 2
      </Link>
      <Link to="/menu3" style={paddingLeft}>
        Menu 3
      </Link>
      <br />
      <br />
      <Routes>
        <Route path="/" element={Menu1()} />
        <Route path="/menu1" element={Menu1()} />
        <Route path="/menu2/*" element={Menu2()}>
          <Route path="new" element={Menu1()} />
        </Route>
        <Route path="/menu3" element={Menu3()} />
      </Routes>
      <br />
      <br />
    </BrowserRouter>
  );
};

let Menu1 = () => {
  return <h3>Menu 1</h3>;
};

let Menu2 = () => {
  return (
    <div>
      <h3>Menu 2</h3>
      <Link to="new">new</Link>
      <Outlet />
    </div>
  );
};

let Menu3 = () => {
  return (
    <div>
      <h3>Menu 3 </h3>
    </div>
  );
};

export default RouterComp;
