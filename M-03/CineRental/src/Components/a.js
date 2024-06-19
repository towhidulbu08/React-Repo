const initialState = {
  cartData: {
    class: {
      new: "Tamim",
    },
  },
};

const newStateArray = { ...initialState.cartData.class, new: "Sakib" };

console.log(newStateArray);
