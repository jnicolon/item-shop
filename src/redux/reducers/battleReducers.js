import * as types from "../actions/actionTypes";

const initialState = {
  battleLog: [],
  winner: false,
};

export default function buyGold(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_WINNER:
      return {
        ...state,
        winner: action.payload,
      };
    case types.UPDATE_BATTLE:
      return {
        ...state,
        battleLog: action.payload,
      };
    case types.CLEAR_BATTLELOG:
      return {
        ...state,
        battleLog: [],
      };
    default:
      return state;
  }
}
