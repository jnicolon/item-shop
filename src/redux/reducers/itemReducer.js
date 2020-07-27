import * as types from "../actions/actionTypes";

export default function itemsReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_ITEM1:
      return "Hello Dolly";
    case types.LOAD_ITEMS_SUCCESS:
      return action.items;
    default:
      return state;
  }
}
