import * as types from "../actions/actionTypes";

const initialState = {
  loading: false,
  items: [],
  error: "",
  //we initialize selected item with an itemName property so we can
  //access it later to de select the selected item in App.js
  selectedItem: { itemName: "" },
};

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: "",
      };
    case types.FETCH_ITEMS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
    case types.SELECT_ITEM:
      return {
        ...state,
        selectedItem: action.payload,
      };
    default:
      return state;
  }
}
