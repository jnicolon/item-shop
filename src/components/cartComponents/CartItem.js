import React, { Component } from "react";
import CartItemQuantity from "./CartItemQuantity";

export default class CartItem extends Component {
  render() {
    return (
      <div className="cart-item-container">
        <div className="cart-item-image">
          <img
            alt="item-img"
            src={this.props.item.image && this.props.item.image.fields.file.url}
          ></img>
        </div>
        <div className="cart-item-info">
          <h3 className="cart-item-name">{this.props.item.itemName}</h3>
          <h6 className="cart-item-type">{this.props.item.type}</h6>
          <CartItemQuantity item={this.props.item} />
        </div>
      </div>
    );
  }
}
