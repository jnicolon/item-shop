import React, { Component } from "react";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";

export default class CartPage extends Component {
  render() {
    return (
      <>
        <h1 className="cart-title">Your Cart</h1>
        <div className="cart-container">
          <div className="cart-page-items-container">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <Checkout />
        </div>
      </>
    );
  }
}
