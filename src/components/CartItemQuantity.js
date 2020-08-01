import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../redux/actions/cartActions";
import { buyItem, returnItem } from "../redux/actions/goldActions";

class CartItemQuantity extends Component {
  render() {
    const itemQty = this.props.cart.filter(
      (cartItem) => cartItem.id === this.props.item.id
    ).length;

    const itemPriceTotal = itemQty * this.props.item.price;

    return (
      <div className="cart-item-quantity-container">
        <h4 className="cart-item-quantity">Qty: {itemQty}</h4>
        <button
          className="btn-quantity"
          onClick={() => this.props.removeItem(this.props.item)}
        >
          -
        </button>
        <button
          className="btn-quantity"
          onClick={() => this.props.addItem(this.props.item)}
        >
          +
        </button>
        <div className="sub-total-container">
          <h4>Price</h4>
          <h5>{itemPriceTotal}g</h5>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (item) => {
      dispatch(addItemToCart(item));
      dispatch(buyItem(item.price));
    },
    removeItem: (item) => {
      dispatch(removeItemFromCart(item));
      dispatch(returnItem(item.price));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemQuantity);
