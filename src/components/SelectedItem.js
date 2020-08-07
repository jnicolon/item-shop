import React, { Component } from "react";
import SelectedItemInfo from "./SelectedItemInfo";
import { connect } from "react-redux";

class SelectedItem extends Component {
  render() {
    console.log(this.props.selectedItem);
    return (
      <div>
        <h3>hello</h3>
        {this.props.selectedItem.itemName === "" ? (
          <h3>Select an item to view it's stats.</h3>
        ) : (
          <SelectedItemInfo />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedItem: state.items.selectedItem,
  };
}

export default connect(mapStateToProps)(SelectedItem);
