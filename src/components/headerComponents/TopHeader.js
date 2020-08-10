import React, { Component } from "react";
import FightDetailsHeaderLeft from "./FightDetailsHeaderLeft";
import FightDetailsHeaderRight from "./FightDetailsHeaderRight";

import { Link } from "react-router-dom";

export default class TopHeader extends Component {
  render() {
    return (
      <header className="top-header">
        <Link to="/Weapon" className="logo">
          ItemShop
        </Link>
        <FightDetailsHeaderLeft />

        <FightDetailsHeaderRight />
      </header>
    );
  }
}
