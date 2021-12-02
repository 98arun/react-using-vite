import changeNumber from "./incDec";
import { combineReducers } from "redux";
import numOfCakes from "./cakeReducer";

const rootReducer = combineReducers({
  changeNumber,
  numOfCakes,
});

export default rootReducer;
