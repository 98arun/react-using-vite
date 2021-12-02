import { connect } from "react-redux";
import { buyCakes } from "./actions";
import numOfCakes from "./reducer/cakeReducer";

const Cakes = (props: any) => {
  return (
    <>
      <h1>Buy Cakes - {props.numOfCakes} </h1>
      <button onClick={props.buyCakes}>Buy</button>
    </>
  );
};

const mapStateToProps = (state: any) => {
  console.log("14", state);

  return {
    numOfCakes: state.numOfCakes.totalCakes,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    buyCakes: () => dispatch(buyCakes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
