import * as types from "../actions/actionTypes";

const initialState = {
  goldTotal: 500,
};

export default function buyGold(state = initialState, action) {
  switch (action.type) {
    case types.BUY_ITEM:
      return {
        ...state,
        goldTotal: state.goldTotal - action.payload,
      };
    default:
      return state;
  }
}
