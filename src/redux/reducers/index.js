import { combineReducers } from "redux";
import items from "./itemReducer";
import goldTotal from "./goldReducer";
import cart from "./cartReducer";

const rootReducer = combineReducers({
  items,
  goldTotal,
  cart,
});

export default rootReducer;
