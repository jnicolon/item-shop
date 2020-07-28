import * as types from "./actionTypes";

export default function buyItem(itemPrice) {
  return {
    type: types.BUY_ITEM,
    payload: itemPrice,
  };
}
