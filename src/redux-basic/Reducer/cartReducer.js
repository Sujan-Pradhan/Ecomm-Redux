
const initialData = {
  cartCount: 0,
};

const cartReducer = (state = initialData, action) => {
  const {type, payload} = action;
  //state store the value
  //action is a function, object describing "what happened" and return a new state value
  //action.type => nanme of the function
  switch (type) {
    case "Add_Item":
      return { cartCount: state.cartCount + 1 };
    case "Remove_Item":
      return { cartCount: state.cartCount - 1 };
    default:
      return state;
  }
};

export default cartReducer;
