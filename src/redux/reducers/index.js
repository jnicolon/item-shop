import { combineReducers } from "redux";
import items from "./itemReducer";
import goldTotal from "./goldReducer";

const rootReducer = combineReducers({
  items,
  goldTotal,
});

export default rootReducer;
