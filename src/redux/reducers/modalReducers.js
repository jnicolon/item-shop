import * as types from "../actions/actionTypes";

const initialState = {
  goldModal: false,
};

export default function goldModalReducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_GOLD_MODAL:
      return {
        goldModal: action.payload,
      };
    default:
      return state;
  }
}
