import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/" exact>
          Weapons
        </NavLink>
        <NavLink to="/armor" exact>
          Armor
        </NavLink>
        <NavLink to="Spells" exact>
          Spells
        </NavLink>
      </div>
    );
  }
}
