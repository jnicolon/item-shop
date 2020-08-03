import React, { Component } from "react";
import { connect } from "react-redux";
import { buyItem } from "../redux/actions/goldActions";
import { addItemToCart } from "../redux/actions/cartActions";
import * as itemActions from "../redux/actions/itemActions";

class BuyBtn extends Component {
  render() {
    return (
      <div>
        <button
          className="single-item-btn"
          onClick={() => this.props.buyItem(this.props.item)}
        >
          Buy
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedItem: state.items.selectedItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyItem: (item) => {
      dispatch(buyItem(item.price));
      dispatch(addItemToCart(item));
    },
    selectItem: (item) => {
      dispatch(itemActions.selectItem(item));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(BuyBtn);
