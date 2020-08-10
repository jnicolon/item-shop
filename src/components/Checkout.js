import React, { Component } from "react";
import { cartTotal } from "../redux/actions/cartActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SelectedStatsContainer from "./SelectedStatsContainer";
import { playerStats } from "./fightComponents/FightFunctionality";
import { checkWeaponNumber } from "../redux/actions/cartActions";

class Checkout extends Component {
  componentDidMount() {
    //sets the total price of all the items in the cart
    this.props.setCartTotal();
    this.props.checkWeaponNumber();
  }
  componentDidUpdate() {
    //updates the total price every time an item is added
    this.props.setCartTotal();
    this.props.checkWeaponNumber();
  }

  render() {
    return (
      <div className="checkout-container">
        <h2>Total Player Stats</h2>
        {/* we calculate the combined stats of the items in the cart and we pass it as a function to props to be displayed in a table */}
        <SelectedStatsContainer stats={playerStats(this.props.cart)} />
        <h1>Total: {this.props.cartTotal}g</h1>

        {this.props.weaponNumber <= 2 ? (
          <Link to="/BattlePage">Buy and go to battle!</Link>
        ) : (
          <>
            <h6>You can't equip more than two weapons.</h6>
            <h6>(You Only have two hands.)</h6>
          </>
        )}
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
    weaponNumber: state.cart.weaponNumber,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //function to calculate the total price of the items in the cart
    setCartTotal: () => dispatch(cartTotal()),
    checkWeaponNumber: () => dispatch(checkWeaponNumber()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
