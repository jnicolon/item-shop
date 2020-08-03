import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Character,
  fight,
  playerStats,
} from "./fight components/FightFunctionality";

class Battle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstBattle: [],
    };
  }

  componentDidMount() {
    const pStats = playerStats(this.props.cart);

    console.log(pStats);
    // const fighter = new Character("Fighter", 20, 40, 0);

    // const player = new Character("Player", playerHp, playerAtk, 0);

    // this.setState({ firstBattle: fight(player, fighter) });

    // console.log(fighter, player);
  }

  componentDidUpdate() {
    const pStats = playerStats(this.props.cart);

    console.log(pStats);
  }

  render() {
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
