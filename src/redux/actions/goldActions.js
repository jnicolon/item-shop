import * as types from "./actionTypes";

export function buyItem(itemPrice) {
  return {
    type: types.BUY_ITEM,
    payload: itemPrice,
  };
}
export function returnItem(itemPrice) {
  return {
    type: types.RETURN_ITEM,
    payload: itemPrice,
  };
}
export function setCurrentGold(currentHeroGold) {
  return {
    type: types.SET_CURRENT_GOLD,
    payload: currentHeroGold,
  };
}
