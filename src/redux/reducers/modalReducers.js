import * as types from "../actions/actionTypes";

const initialState = {
  goldModal: false,
  weaponNumberModal: false,
};

export default function goldModalReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_GOLD_MODAL:
      return {
        ...state,
        goldModal: action.payload,
      };
    case types.TOGGLE_WEAPON_NUMBER_MODAL:
      return {
        ...state,
        weaponNumberModal: action.payload,
      };
    default:
      return state;
  }
}
