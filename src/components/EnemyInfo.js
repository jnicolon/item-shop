import React, { Component } from "react";
import { connect } from "react-redux";

class HeroInfo extends Component {
  render() {
    return (
      <div className="enemy-info-container">
        <div className="enemy-info-img-container">
          <img
            className="enemy-info-img"
            src={
              this.props.currentLevel.enemy
                ? this.props.currentLevel.enemy.img
                : ""
            }
            alt="enemy-info-img"
          ></img>
        </div>
        <div className="enemy-name-container">
          <h3 className="enemy-type">Enemy</h3>
          <h6 className="enemy-name">
            {this.props.currentLevel.enemy
              ? this.props.currentLevel.enemy.name
              : ""}
          </h6>
        </div>
        <div>
          <table className="enemy-stats-container">
            <tbody>
              <tr>
                <td>HP:</td>
                <td>
                  {this.props.currentLevel.enemy
                    ? this.props.currentLevel.enemy.stats.hp
                    : ""}
                </td>
              </tr>
              <tr>
                <td>ATK:</td>
                <td>
                  {this.props.currentLevel.enemy
                    ? this.props.currentLevel.enemy.stats.atk
                    : ""}
                </td>
              </tr>
              <tr>
                <td>MANA:</td>
                <td>
                  {this.props.currentLevel.enemy
                    ? this.props.currentLevel.enemy.stats.mana
                    : ""}
                </td>
              </tr>
            </tbody>
          </table>
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
