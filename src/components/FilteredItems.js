import React, { Component } from "react";
import { connect } from "react-redux";
import buyItem from "../redux/actions/goldActions";
import addItemToCart from "../redux/actions/cartActions";

class FilteredItems extends Component {
  render() {
    const filteredItems = this.props.items.items.filter(
      (key) => `/${key.fields.type}` === this.props.path
    );

    const renderItems = filteredItems.map((item) => {
      return (
        <div className="single-item" key={item.fields.id}>
          <img src={item.fields.image.fields.file.url} alt={item.fields.id} />
          <p>{item.fields.itemName}</p>
          <p>{item.fields.price} gold</p>
          <button onClick={() => this.props.buyItem(item)}>Buy</button>
        </div>
      );
    });

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
    buyItem: (item) => {
      dispatch(buyItem(item.fields.price));
      dispatch(addItemToCart(item.fields));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FilteredItems);
