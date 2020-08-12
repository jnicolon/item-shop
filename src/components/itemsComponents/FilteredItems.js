import React, { Component } from "react";
import { connect } from "react-redux";
import SingleItem from "./SingleItem";

class FilteredItems extends Component {
  render() {
    const filteredItems = this.props.items.items.filter(
      (key) => `/${key.fields.type}` === this.props.path
    );

    const sortItemsByPrice = filteredItems.sort(
      (a, b) => a.fields.price - b.fields.price
    );

    const renderItems = sortItemsByPrice.map((item) => {
      return <SingleItem item={item.fields} key={item.fields.id} />;
    });

    return <div className="item-container">{renderItems}</div>;
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(FilteredItems);
