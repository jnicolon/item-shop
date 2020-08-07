import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Character,
  fight,
  playerStats,
} from "./fight components/FightFunctionality";
import { changeNextLevel } from "../redux/actions/levelActions";
import { Link } from "react-router-dom";
import { resetSlides } from "../redux/actions/textActions";
import { setCurrentLevel } from "../redux/actions/levelActions";
import { clearCart } from "../redux/actions/cartActions";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      battle: {
        winner: false,
        battleLog: [],
      },
    };
  }

  componentDidMount() {
    const pStats = playerStats(this.props.cart);

    const enemy = new Character(
      this.props.currentLevel.enemy.name,
      this.props.currentLevel.enemy.stats.hp,
      this.props.currentLevel.enemy.stats.atk,
      this.props.currentLevel.enemy.stats.mana
    );

    const hero = new Character(
      this.props.currentLevel.hero.name,
      pStats.hp,
      pStats.atk,
      pStats.mana
    );

    this.setState({ battle: fight(hero, enemy) });
  }

  render() {
    return (
      <div>
        <div className="draw-battle-container">
          {this.state.battle.battleLog.map((log, index) => {
            return <p key={index}>{log}</p>;
          })}
        </div>
        {!this.state.battle.winner ? (
          <h1 className="game-over">You lost. GAME OVER. </h1>
        ) : (
          <div className="win-link-container">
            <Link
              className="win-link"
              to="/levelIntro"
              onClick={() => {
                this.props.nextLevel();
                this.setState({ battle: { winner: false } });
                this.props.resetSlides();
                this.props.setCurrentLevel();
                this.props.clearCart();
              }}
            >
              Congratulations! Press here to go to the Next Level!
            </Link>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    currentLevel: state.level.currentLevel,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nextLevel: () => dispatch(changeNextLevel()),
    resetSlides: () => dispatch(resetSlides()),
    setCurrentLevel: () => dispatch(setCurrentLevel()),
    clearCart: () => dispatch(clearCart()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
