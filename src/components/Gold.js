import React from "react";
import { connect } from "react-redux";

function Gold(props) {
  return <div>Gold: {props.goldTotal}</div>;
}

function mapStateToProps(state) {
  return {
    goldTotal: state.goldTotal.goldTotal,
  };
}

export default connect(mapStateToProps)(Gold);
