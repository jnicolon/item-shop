import React, { Component } from "react";
import { connect } from "react-redux";

class SelectedItemInfo extends Component {
  render() {
    return (
      <div className="selected-item">
        <img
          className="selected-item-image"
          src={
            this.props.selectedItem.image
              ? this.props.selectedItem.image.fields.file.url
              : ""
          }
          alt=""
        />
        <h4 className="selected-image-name">
          {this.props.selectedItem.itemName
            ? this.props.selectedItem.itemName
            : ""}
        </h4>
        <h5>
          {this.props.selectedItem.description
            ? this.props.selectedItem.description
            : ""}
        </h5>
        <table className="selected-item-stats-container">
          <tbody>
            <tr>
              <td>HP</td>
              <td className="selected-item-stats-number">10hp</td>
            </tr>
            <tr>
              <td>ATK</td>
              <td className="selected-item-stats-number">50</td>
            </tr>
            <tr>
              <td>MANA</td>
              <td className="selected-item-stats-number">100</td>
            </tr>
          </tbody>
        </table>
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
