import React, { Component } from "react";
import { connect } from "react-redux";
import filteredItems from "../functionality/filteredItems";
import buyItem from "../redux/actions/goldActions";

class Spells extends Component {
  render() {
    const renderItems = filteredItems(
      this.props.location.pathname,
      this.props.items.items,
      this.props.buyItem
    );

    return <div className="item-container">{renderItems}</div>;
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    buyItem: (price) => dispatch(buyItem(price)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Spells);
