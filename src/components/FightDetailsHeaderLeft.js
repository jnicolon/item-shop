import React, { Component } from "react";
import { connect } from "react-redux";
import EnemyInfo from "./EnemyInfo";

class FightDetailsHeaderLeft extends Component {
  render() {
    return (
      <div className="fight-details-header-container">
        <EnemyInfo />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentLevel: state.level.currentLevel,
  };
}

export default connect(mapStateToProps)(FightDetailsHeaderLeft);
