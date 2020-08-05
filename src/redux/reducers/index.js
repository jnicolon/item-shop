import { combineReducers } from "redux";
import items from "./itemReducer";
import goldTotal from "./goldReducer";
import cart from "./cartReducer";
import modal from "./modalReducers";
import txt from "./textReducers";

const rootReducer = combineReducers({
  items,
  goldTotal,
  cart,
  modal,
  txt,
});

export default rootReducer;
