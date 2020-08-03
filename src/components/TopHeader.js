import React, { Component } from "react";
import Gold from "./Gold";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";

export default class TopHeader extends Component {
  render() {
    return (
      <header className="top-header">
        <Gold />
        <Link to="/" className="logo">
          ItemShop
        </Link>
        <CartIcon />
      </header>
    );
  }
}
