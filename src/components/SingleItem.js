import React, { Component } from "react";
import { connect } from "react-redux";
import { buyItem } from "../redux/actions/goldActions";
import { addItemToCart } from "../redux/actions/cartActions";
import * as itemActions from "../redux/actions/itemActions";

class SingleItem extends Component {
  render() {
    return (
      <div
        className={
          this.props.item.id === this.props.selectedItem.id
            ? "single-item single-item-selected"
            : "single-item"
        }
      >
        <div
          className="single-item-top"
          onClick={() => {
            this.props.selectItem(this.props.item);
          }}
        >
          <img
            src={this.props.item.image.fields.file.url}
            alt={this.props.item.id}
          />
          <p className="single-item-title">{this.props.item.itemName}</p>
        </div>
        <div className="single-item-price-container">
          <p className="single-item-price">{this.props.item.price} gold</p>
          <button
            className="single-item-btn"
            onClick={() => this.props.buyItem(this.props.item)}
          >
            Buy
          </button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
