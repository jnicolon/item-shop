import React, { Component } from "react";
import { connect } from "react-redux";
import filteredItems from "../functionality/filteredItems";

class Armor extends Component {
  render() {
    const renderItems = filteredItems(
      this.props.location.pathname,
      this.props.items.items
    );

    return <div className="item-container">{renderItems}</div>;
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(Armor);
