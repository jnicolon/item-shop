import React, { Component } from "react";
import FightDetailsHeaderLeft from "./FightDetailsHeaderLeft";
import FightDetailsHeaderRight from "./FightDetailsHeaderRight";

import { Link } from "react-router-dom";

export default class TopHeader extends Component {
  render() {
    return (
      <header className="top-header">
        <FightDetailsHeaderLeft />
        <Link to="/" className="logo">
          ItemShop
        </Link>
        <FightDetailsHeaderRight />
      </header>
    );
  }
}
