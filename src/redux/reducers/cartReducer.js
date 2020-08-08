import * as types from "../actions/actionTypes";

const initialState = {
  cart: [],
  cartTotal: 0,
  weaponNumber: 0,
};

export default function cartReducers(state = initialState, action) {
  switch (action.type) {
    case types.CART_TOTAL:
      // copy the cart array
      const cartCopy1 = [...state.cart];
      // we add all the prices
      const cartTotal = cartCopy1.reduce(
        (total, item) => total + item.price,
        0
      );
      return { ...state, cartTotal: cartTotal };
    case types.ADD_ITEM_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case types.REMOVE_ITEM_FROM_CART:
      //find the index of the first item in the cart array
      const itemIndex = state.cart.lastIndexOf(action.payload);
      //copy the cart array
      const cartCopy2 = [...state.cart];
      //splice the first iteration of the item we want to remove
      cartCopy2.splice(itemIndex, 1);
      return { ...state, cart: [...cartCopy2] };
    case types.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    case types.CHECK_WEAPON_NUMBER:
      const cartCopy3 = [...state.cart];
      const weaponArray = cartCopy3.filter((item) => item.type === "Weapon");
      return {
        ...state,
        weaponNumber: weaponArray.length,
      };
    default:
      return state;
  }
}
