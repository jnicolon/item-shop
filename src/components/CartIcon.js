import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CartIcon extends Component {
  render() {
    return (
      <>
        <h6>Items in bag: {this.props.itemsInCart.length}</h6>
        <Link to="./CartPage">Click to checkout</Link>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    itemsInCart: state.cart.cart,
  };
}

export default connect(mapStateToProps)(CartIcon);
