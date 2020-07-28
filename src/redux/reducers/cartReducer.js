import * as types from "../actions/actionTypes";

const initialState = {
  cart: [],
};

export default function cartReducers(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ITEM_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
}
