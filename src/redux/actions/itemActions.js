import * as types from "./actionTypes";

export const fetchItemsRequest = () => {
  return {
    type: types.FETCH_ITEMS_REQUEST,
  };
};

export const fetchItemsSuccess = (items) => {
  return {
    type: types.FETCH_ITEMS_SUCCESS,
    payload: items,
  };
};

export const fetchItemsFailure = (error) => {
  return {
    type: types.FETCH_ITEMS_FAILURE,
    payload: error,
  };
};
