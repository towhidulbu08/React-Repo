export const initialState = {
  cartData: [],
};
const CartReducers = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return {
        cartData: [...state.cartData, action.payload],
      };

    case "Remove_From_Cart":
      return {
        ...state,
        cartData: state.cartData.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

export default CartReducers;
