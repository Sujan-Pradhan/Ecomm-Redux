const initialData = {
  cartItems: [],
};

function newCartReducer(state = initialData, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: [
          ...state.cartItems.filter(
            (item) => item.itemId !== action.payload.itemId
          ),
        ],
      };
    case "CLEAR_CART":
      return {
        cartItems: [],
      };
    default:
      return state;
  }
}

export default newCartReducer;
