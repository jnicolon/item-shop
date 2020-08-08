import React, { Component } from "react";

//pass text for the modal and modal status as props to make it reusable.

class Modal extends Component {
  render() {
    return (
      <div
        className={
          this.props.modalStatus ? "modal-bg display-on" : "display-off"
        }
      >
        <div className="modal-sign">
          <h1 className="modal-txt">{this.props.modalTxt}</h1>
        </div>
      </div>
    );
  }
}

export default Modal;
