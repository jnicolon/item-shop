import * as types from "../actions/actionTypes";

const initialState = {
  currentGold: 0,
};

export default function buyGold(state = initialState, action) {
  switch (action.type) {
    case types.BUY_ITEM:
      return {
        ...state,
        currentGold: state.currentGold - action.payload,
      };
    case types.RETURN_ITEM:
      return {
        ...state,
        currentGold: state.currentGold + action.payload,
      };
    default:
      return state;
  }
}
