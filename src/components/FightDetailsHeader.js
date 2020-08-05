import React, { Component } from "react";
import { connect } from "react-redux";
import CharacterGold from "./CharacterGold";
import HeroInfo from "./HeroInfo.js";
import EnemyInfo from "./EnemyInfo.js";

class FightDetailsHeader extends Component {
  render() {
    return (
      <div className="fight-details-header-container">
        <HeroInfo />
        <EnemyInfo />
        <CharacterGold />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentLevel: state.level.currentLevel,
  };
}

export default connect(mapStateToProps)(FightDetailsHeader);
