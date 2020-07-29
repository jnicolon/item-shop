import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CartIcon extends Component {
  render() {
    return (
      <Link to="./CartPage">
        Items in cart: {this.props.itemsInCart.length}
      </Link>
    );
  }
}

function mapStateToProps(state) {
  return {
    itemsInCart: state.cart.cart,
  };
}

export default connect(mapStateToProps)(CartIcon);
