import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <div className="cart-item-container">
        <div className="cart-item-image">
          <img alt="item-img"></img>
        </div>
        <div className="cart-item-info">
          <h3 className="cart-item-name">Name of the item</h3>
          <h6 classNam="cart-item-type">Weapon</h6>
          <div className="cart-item-quantity-container">
            <h4 classNam="cart-item-quantity">Qty: 1</h4>
            <button className="btn-quantity">-</button>
            <button className="btn-quantity">+</button>
            <div className="sub-total-container">
              <h4>Price</h4>
              <h5>500g</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
