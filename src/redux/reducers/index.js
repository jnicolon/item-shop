import { combineReducers } from "redux";
import items from "./itemReducer";
import gold from "./goldReducer";
import cart from "./cartReducer";
import modal from "./modalReducers";
import txtIntro from "./textReducers";
import level from "./levelReducers";
import battle from "./battleReducers";

const rootReducer = combineReducers({
  items,
  gold,
  cart,
  modal,
  txtIntro,
  level,
  battle,
});

export default rootReducer;
