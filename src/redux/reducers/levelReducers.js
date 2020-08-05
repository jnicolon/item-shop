import * as types from "../actions/actionTypes";
import { levels } from "../../components/levelComponents/levelsInfo";

const initialState = {
  currentLevelNumber: 1,
  currentLevel: [],
  allLevels: [...levels],
};

export default function nextLevel(state = initialState, action) {
  switch (action.type) {
    case types.NEXT_LEVEL:
      return {
        ...state,
        currentLevelNumber: state.currentLevel + 1,
      };
    case types.SET_CURRENT_LEVEL:
      return {
        ...state,
        currentLevel: state.allLevels[state.currentLevelNumber - 1],
      };
    default:
      return state;
  }
}
