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
          onClick={() =>
            this.props.goldTotal - this.props.item.price >= 0
              ? this.props.buyItem(this.props.item)
              : console.log("not enough gold!")
          }
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
    goldTotal: state.goldTotal.goldTotal,
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
