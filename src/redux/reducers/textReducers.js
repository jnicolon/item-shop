import * as types from "../actions/actionTypes";

const initialState = {
  currentSlide: 0,
};

export default function textReducers(state = initialState, action) {
  switch (action.type) {
    case types.NEXT_TXT_SLIDE:
      return {
        currentSlide: state.currentSlide + 1,
      };
    case types.RESET_SLIDES:
      return {
        currentSlide: 0,
      };
    default:
      return state;
  }
}
