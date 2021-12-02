import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { inc, dec } from "./actions";

const MainRedux = () => {
  const myState = useSelector((state: any) => state.changeNumber);
  const dispatch = useDispatch();
  console.log("LN9", myState);
  return (
    <>
      <h1>Inc/Dec Counter using react redux</h1>
      <button onClick={() => dispatch(dec())}>-</button>
      <input type="text" value={myState.count} readOnly />
      <button onClick={() => dispatch(inc())}>+</button>
      <Link to="/Link1"> Home</Link>
    </>
  );
};

export default MainRedux;
