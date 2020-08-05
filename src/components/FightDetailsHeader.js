import React, { Component } from "react";
import { connect } from "react-redux";

class FightDetailsHeader extends Component {
  render() {
    return <div></div>;
  }
}

function mapStateToProps(state) {
  return {
    currentLevel: state,
  };
}

export default connect(mapStateToProps)(FightDetailsHeader);
