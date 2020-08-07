import React, { Component } from "react";
import HeroInfo from "../components/HeroInfo";
import EnemyInfo from "../components/EnemyInfo";
import { Link } from "react-router-dom";
export default class Intro extends Component {
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
          <Link to="/Armor">Go to item shop</Link>
        </div>
      </>
    );
  }
}
