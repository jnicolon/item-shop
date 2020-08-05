import * as types from "../actions/actionTypes";

const initialState = {
  currentLevel: 1,
};

export default function nextLevel(state = initialState, action) {
  switch (action.type) {
    case types.NEXT_LEVEL:
      return {
        ...state,
        currentLevel: state.currentLevel + 1,
      };
    default:
      return state;
  }
}
