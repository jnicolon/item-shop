import React, { Component } from "react";
import { connect } from "react-redux";

class GoldModal extends Component {
  render() {
    return (
      <div
        className={
          this.props.goldModal ? "gold-modal-bg display-on" : "display-off"
        }
      >
        <div className="gold-modal-sign">
          <h1 className="gold-modal-txt">You don't have enough gold!</h1>
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return {
    goldModal: state.modal.goldModal,
  };
}

export default connect(mapStatetoProps)(GoldModal);
