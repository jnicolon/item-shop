import React, { Component } from "react";
import { connect } from "react-redux";
import { Character, playerStats } from "./fightComponents/FightFunctionality";
import { changeNextLevel } from "../redux/actions/levelActions";
import { resetSlides } from "../redux/actions/textActions";
import { setCurrentLevel } from "../redux/actions/levelActions";
import { clearCart } from "../redux/actions/cartActions";
import {
  updateBattle,
  updateWinner,
  clearBattleLog,
  pushBattleLog,
} from "../redux/actions/battleActions";
import BattleBtn from "./fightComponents/BattleBtn";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawBattle: false,
    };
  }

  componentWillUnmount() {
    this.props.clearBattleLog();
  }

  fight = (player, enemy) => {
    //when one of the two has zero hp,  .
    if (player.hp <= 0 || enemy.hp <= 0) {
      if (player.hp <= 0) {
        //we add who wins to the battle log
        this.props.pushBattleLog(`${enemy.name} defeated ${player.name}`);
      } else if (enemy.hp <= 0) {
        this.props.pushBattleLog(`${player.name} defeated ${enemy.name}`);
        this.props.updateWinner(true);
      }
      //and return the battle log

      return this.props.battleLog;
    } else {
      //we attack and set the new hp of the enemy.
      enemy.hp = player.attack(enemy);
      //we add the action to the battle log.
      this.props.pushBattleLog(
        `${player.name} attacked ${enemy.name} and dealt ${player.atk} damage. ${enemy.name} has ${enemy.hp} hp left`
      );
      //we check if it's zero and if so we re start the function here
      if (enemy.hp <= 0) {
        return this.fight(player, enemy);
      }
      //if not we let the enemy attack back
      else {
        player.hp = enemy.attack(player);
        this.props.pushBattleLog(
          `${enemy.name} attacked ${player.name} and dealt ${enemy.atk} damage. ${player.name} has ${player.hp} hp left`
        );
        return this.fight(player, enemy);
      }
    }
  };

  battle = () => {
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

    this.fight(hero, enemy);

    this.setState({ drawBattle: true });
  };

  render() {
    return (
      <div>
        <button onClick={() => this.battle()}>Fight!</button>
        <div className="draw-battle-container">
          {this.props.battleLog.map((log, index) => {
            return <p key={index}>{log}</p>;
          })}
        </div>
        <BattleBtn drawBattle={this.state.drawBattle} />
      </div>
    );
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
    clearCart: () => dispatch(clearCart()),
    updateBattle: (battle) => dispatch(updateBattle(battle)),
    updateWinner: (winner) => dispatch(updateWinner(winner)),
    clearBattleLog: () => dispatch(clearBattleLog()),
    pushBattleLog: (battleAction) => dispatch(pushBattleLog(battleAction)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Battle);
