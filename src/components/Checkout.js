import React, { Component } from "react";
import { cartTotal } from "../redux/actions/cartActions";
import { connect } from "react-redux";

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

        <button>CheckOut</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    cartTotal: state.cart.cartTotal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCartTotal: () => dispatch(cartTotal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
