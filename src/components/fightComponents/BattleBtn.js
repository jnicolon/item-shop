import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  changeNextLevel,
  setCurrentLevel,
} from "../../redux/actions/levelActions";
import { resetSlides } from "../../redux/actions/textActions";
import { clearCart } from "../../redux/actions/cartActions";
import { updateWinner } from "../../redux/actions/battleActions";

class BattleBtn extends Component {
  drawBtns = () => {
    if (this.props.drawBattle)
      return !this.props.winnerStatus ? (
        <div className="win-link-container">
          <h1 className="game-over">You lost. GAME OVER. </h1>
          <Link
            className="win-link"
            to="/introFightDetails"
            onClick={() => {
              this.props.resetSlides();
              this.props.setCurrentLevel();
            }}
          >
            Click here to start over.
          </Link>
        </div>
      ) : this.props.currentLevel.level === this.props.allLevels.length ? (
        <div className="win-link-container">
          <h3>
            You won! Like life, there's no meaning and if you feel empty,
            welcome to the club. The journey ends... for now.
          </h3>
        </div>
      ) : (
        <div className="win-link-container">
          <Link
            className="win-link"
            to="/levelIntro"
            onClick={() => {
              this.props.nextLevel();
              this.props.updateWinner(false);
              this.props.resetSlides();
              this.props.setCurrentLevel();
            }}
          >
            Congratulations! Press HERE to go to the Next Level!
          </Link>
        </div>
      );
  };

  render() {
    return <div>{this.drawBtns()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    currentLevel: state.level.currentLevel,
    allLevels: state.level.allLevels,
    winnerStatus: state.battle.winner,
    battleLog: state.battle.battleLog,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextLevel: () => dispatch(changeNextLevel()),
    resetSlides: () => dispatch(resetSlides()),
    setCurrentLevel: () => dispatch(setCurrentLevel()),
    updateWinner: (winner) => dispatch(updateWinner(winner)),
    clearCart: () => dispatch(clearCart()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattleBtn);
