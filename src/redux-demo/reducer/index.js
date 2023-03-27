import { combineReducers } from "redux";
// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
import newCartReducer from "./newCartReducer";

import { itemReducer } from "./itemReducer";

export const RootReducer = combineReducers({
  items: itemReducer,
  cart: newCartReducer,
});

// export default RootReducer;
