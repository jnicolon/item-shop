import React, { Component } from "react";
import FightDetailsHeader from "./FightDetailsHeader";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

export default class TopHeader extends Component {
  render() {
    return (
      <header className="top-header">
        <FightDetailsHeader />
        <Link to="/" className="logo">
          ItemShop
        </Link>
        <CartIcon />
      </header>
    );
  }
}
