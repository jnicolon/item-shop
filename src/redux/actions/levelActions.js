import * as types from "./actionTypes";

export function changeNextLevel() {
  return {
    type: types.NEXT_LEVEL,
  };
}

export function setCurrentLevel() {
  return {
    type: types.SET_CURRENT_LEVEL,
  };
}
