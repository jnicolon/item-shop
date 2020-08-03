import React, { Component } from "react";
import { connect } from "react-redux";
import { Character, fight } from "./fight components/FightFunctionality";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstBattle: [],
    };
  }

  componentDidMount() {
    const playerHp = this.props.cart.reduce((total, item) => {
      return total + item.hp;
    }, 0);
    const playerAtk = this.props.cart.reduce((total, item) => {
      return total + item.atk;
    }, 0);
    // const playerMana = cart.reduce((total, item) => {
    //   return total + item.mana;
    // }, 0);

    const fighter = new Character("Fighter", 20, 40, 0);

    const player = new Character("Player", playerHp, playerAtk, 0);

    this.setState({ firstBattle: fight(player, fighter) });

    console.log(fighter, player);
  }

  render() {
    console.log(this.state.firstBattle);
    return (
      <div>
        {this.state.firstBattle.map((log, index) => {
          return <p key={index}>{log}</p>;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
  };
}

export default connect(mapStateToProps)(Battle);
