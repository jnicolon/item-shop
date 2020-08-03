import { combineReducers } from "redux";
import items from "./itemReducer";
import goldTotal from "./goldReducer";
import cart from "./cartReducer";
import modal from "./modalReducers";

const rootReducer = combineReducers({
  items,
  goldTotal,
  cart,
  modal,
});

export default rootReducer;
