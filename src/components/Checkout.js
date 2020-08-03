import React, { Component } from "react";
import { cartTotal } from "../redux/actions/cartActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Checkout extends Component {
  componentDidMount() {
    this.props.setCartTotal();
  }
  componentDidUpdate() {
    this.props.setCartTotal();
  }

  render() {
    return (
      <div className="checkout-container">
        <h1>Total: {this.props.cartTotal}g</h1>
        <Link to="./BattlePage">Go to battle!</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    cartTotal: state.cart.cartTotal,
    goldTotal: state.goldTotal.goldTotal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCartTotal: () => dispatch(cartTotal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
