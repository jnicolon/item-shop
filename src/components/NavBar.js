import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink to="/Weapon" exact>
          Weapons
        </NavLink>
        <NavLink to="/Armor" exact>
          Armor
        </NavLink>
        <NavLink to="Spell" exact>
          Spells
        </NavLink>
      </div>
    );
  }
}
