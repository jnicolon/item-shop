import * as types from "./actionTypes";

export function nextSlide() {
  return {
    type: types.NEXT_TXT_SLIDE,
  };
}

export function resetSlides() {
  return {
    type: types.RESET_SLIDES,
  };
}
