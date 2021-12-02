export const inc = () => {
  return {
    type: "INCREMENT",
  };
};
export const dec = () => {
  return {
    type: "DECREMENT",
  };
};

export const Buy_Cakes = "BuyCakes";

export const buyCakes = () => {
  return {
    type: Buy_Cakes,
  };
};
