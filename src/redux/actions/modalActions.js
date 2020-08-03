import * as types from "./actionTypes";

export function toggleGoldModal(status) {
  return {
    type: types.TOGGLE_GOLD_MODAL,
    payload: status,
  };
}
