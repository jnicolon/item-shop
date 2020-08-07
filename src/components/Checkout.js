import React, { Component } from "react";
import { cartTotal } from "../redux/actions/cartActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SelectedStatsContainer from "./SelectedStatsContainer";
import { playerStats } from "./fight components/FightFunctionality";

class Checkout extends Component {
  componentDidMount() {
    //sets the total price of all the items in the cart
    this.props.setCartTotal();
  }
  componentDidUpdate() {
    //updates the total price every time an item is added
    this.props.setCartTotal();
  }

  render() {
    return (
      <div className="checkout-container">
        <h2>Total Player Stats</h2>
        {/* we calculate the combined stats of the items in the cart and we pass it as a function to props to be displayed in a table */}
        <SelectedStatsContainer stats={playerStats(this.props.cart)} />
        <h1>Total: {this.props.cartTotal}g</h1>
        <Link to="./BattlePage">Buy and go to battle!</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    //current items in the cart
    cart: state.cart.cart,
    //current total of the price of the items in the cart
    cartTotal: state.cart.cartTotal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //function to calculate the total price of the items in the cart
    setCartTotal: () => dispatch(cartTotal()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
