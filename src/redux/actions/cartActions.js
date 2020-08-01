import * as types from "./actionTypes";

export function addItemToCart(item) {
  return {
    type: types.ADD_ITEM_TO_CART,
    payload: item,
  };
}

export function removeItemFromCart(itemIndex) {
  return {
    type: types.REMOVE_ITEM_FROM_CART,
    payload: itemIndex,
  };
}

export function cartTotal() {
  return {
    type: types.CART_TOTAL,
  };
}
