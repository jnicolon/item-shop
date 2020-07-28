import React, { Component } from "react";
import { connect } from "react-redux";

class Weapons extends Component {
  render() {
    const filteredItems = this.props.items.items.filter(
      (key) => key.fields.type === "weapon"
    );

    const renderItems = filteredItems.map((key) => {
      return (
        <div className="single-item" key={key.fields.id}>
          <img src={key.fields.image.fields.file.url} alt={key.fields.id} />
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

export default connect(mapStateToProps)(Weapons);
