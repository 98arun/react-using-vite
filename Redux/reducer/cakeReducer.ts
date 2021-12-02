import { Buy_Cakes } from "../actions";

const initialState = {
  totalCakes: 0,
};

const numOfCakes = (state: any = initialState, action: any) => {
  switch (action.type) {
    case Buy_Cakes:
      return { ...state, totalCakes: state.totalCakes + 1 };

    default:
      return state;
  }
};

export default numOfCakes;
