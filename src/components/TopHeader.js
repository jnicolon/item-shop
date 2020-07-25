import React, { Component } from "react";
import Gold from "./Gold";
import Cart from "./Cart";

export default class TopHeader extends Component {
  render() {
    return (
      <header className="top-header">
        <Gold />
        <div className="logo">Item Shop</div>
        <Cart />
      </header>
    );
  }
}
