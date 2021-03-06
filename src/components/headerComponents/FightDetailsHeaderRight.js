import React, { Component } from "react";
import { connect } from "react-redux";
import HeroInfo from "../fightComponents/HeroInfo";
import CartIcon from "../cartComponents/CartIcon";
import CharacterGold from "../cartComponents/CharacterGold";

class FightDetailsHeaderRight extends Component {
  render() {
    return (
      <div className="fight-details-header-container">
        <HeroInfo />
        <div>
          <div>
            <CharacterGold />
          </div>
          <CartIcon />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentLevel: state.level.currentLevel,
  };
}

export default connect(mapStateToProps)(FightDetailsHeaderRight);
