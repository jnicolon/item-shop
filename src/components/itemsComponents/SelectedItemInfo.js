import React, { Component } from "react";
import { connect } from "react-redux";
import SelectedStatsContainer from "./SelectedStatsContainer";
import BuyBtn from "./BuyBtn";

class SelectedItemInfo extends Component {
  render() {
    console.log(this.props.selectedItem);
    return (
      <div
        className={
          this.props.selectedItem.image ? "selected-item" : "selected-item-off"
        }
      >
        <img
          className="selected-item-image"
          src={
            this.props.selectedItem.image
              ? this.props.selectedItem.image.fields.file.url
              : ""
          }
          alt=""
        />
        <h4 className="selected-item-name">
          {this.props.selectedItem.itemName
            ? this.props.selectedItem.itemName
            : ""}
        </h4>
        <h5 className="selected-item-description">
          {this.props.selectedItem.description
            ? this.props.selectedItem.description
            : ""}
        </h5>
        <div>
          <SelectedStatsContainer
            stats={this.props.selectedItem.hp ? this.props.selectedItem : ""}
          />
          <BuyBtn item={this.props.selectedItem} />
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

export default connect(mapStateToProps)(SelectedItemInfo);
