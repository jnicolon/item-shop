import * as types from "./actionTypes";
import * as itemsApi from "../../api/itemsApi";

export function loadItemsSuccess(items) {
  return {
    type: types.LOAD_ITEMS_SUCCESS,
    items,
  };
}

export function loadItems() {
  return function (dispatch) {
    return itemsApi
      .getItems()
      .then((items) => {
        dispatch(loadItemsSuccess(items));
      })
      .catch((error) => {
        throw error;
      });
  };
}
