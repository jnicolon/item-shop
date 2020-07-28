import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    return <div>Items in cart: {this.props.itemsInCart.length}</div>;
  }
}

function mapStateToProps(state) {
  return {
    itemsInCart: state.cart.cart,
  };
}

export default connect(mapStateToProps)(Cart);
