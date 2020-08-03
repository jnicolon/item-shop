import React, { Component } from "react";
import { connect } from "react-redux";

import * as itemActions from "../redux/actions/itemActions";
import BuyBtn from "./BuyBtn";

class SingleItem extends Component {
  render() {
    return (
      <div
        className={
          this.props.item.id === this.props.selectedItem.id
            ? "single-item single-item-selected"
            : "single-item"
        }
        id={this.props.item.id}
        onClick={() => {
          this.props.selectItem(this.props.item);
        }}
      >
        <div
          className={
            this.props.item.id === this.props.selectedItem.id
              ? "single-item-transparent-selector single-item-selected"
              : "single-item-transparent-selector"
          }
        ></div>
        <div className="single-item-top">
          <img
            src={this.props.item.image.fields.file.url}
            alt={this.props.item.id}
          />
          <p className="single-item-title">{this.props.item.itemName}</p>
        </div>
        <div className="single-item-price-container">
          <p className="single-item-price">{this.props.item.price} gold</p>
          <BuyBtn item={this.props.item} />
        </div>
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
    selectItem: (item) => {
      dispatch(itemActions.selectItem(item));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
