import * as types from "./actionTypes";

export default function addItemToCart(itemId) {
  return {
    type: types.ADD_ITEM_TO_CART,
    payload: itemId,
  };
}
