import React, { Component } from "react";
import { connect } from "react-redux";

class HeroInfo extends Component {
  render() {
    console.log(this.props.currentLevel);
    return (
      <div className="hero-info-container">
        <div className="hero-info-img-container">
          <img
            className="hero-info-img"
            src={
              this.props.currentLevel ? this.props.currentLevel.hero.img : ""
            }
            alt="hero-info-img"
          ></img>
        </div>
        <div className="hero-stats-container">
          <h3 className="hero-type">Hero</h3>
          <h6 className="hero-name">{this.props.currentLevel.hero.name}</h6>

          <h6 className="hero-gold">Gold to spend:</h6>
          <h6 className="hero-gold">
            {this.props.currentLevel.hero.gold} gold
          </h6>
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

export default connect(mapStateToProps)(HeroInfo);
