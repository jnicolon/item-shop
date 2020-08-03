import React, { Component } from "react";
import CartItem from "../components/CartItem";
import Checkout from "../components/Checkout";
import { connect } from "react-redux";

class CartPage extends Component {
  render() {
    const renderItem = () => {
      return this.props.cart
        .filter((item, index) => this.props.cart.indexOf(item) === index)
        .map((item, index) => {
          return <CartItem item={item} key={index} />;
        });
    };
    return (
      <>
        {/* <h1 className="cart-title"></h1> */}
        <div className="cart-container">
          <div className="cart-page-items-container">{renderItem()}</div>
          <Checkout />
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
  };
}

export default connect(mapStateToProps)(CartPage);
