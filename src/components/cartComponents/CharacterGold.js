import React from "react";
import { connect } from "react-redux";

function Gold(props) {
  return <h3>Gold left: {props.currentGold}</h3>;
}

function mapStateToProps(state) {
  return {
    currentGold: state.gold.currentGold,
  };
}

export default connect(mapStateToProps)(Gold);
