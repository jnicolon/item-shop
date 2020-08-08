import React, { Component } from "react";
import HeroInfo from "../components/HeroInfo";
import EnemyInfo from "../components/EnemyInfo";
import { Link } from "react-router-dom";
import { setCurrentGold } from "../redux/actions/goldActions";
import { connect } from "react-redux";

class Intro extends Component {
  render() {
    return (
      <>
        <div className="intro-fight-details-container">
          <div className="intro-hero-info-container">
            <HeroInfo />
          </div>
          <h1>VS</h1>
          <div className="intro-enemy-info-container">
            <EnemyInfo />
          </div>
          <Link
            onClick={() =>
              this.props.setCurrentGold(this.props.currentHeroGold)
            }
            to="/Armor"
          >
            Go to item shop
          </Link>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentHeroGold: state.level.currentLevel.hero.gold,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentGold: (currentHeroGold) =>
      dispatch(setCurrentGold(currentHeroGold)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intro);
