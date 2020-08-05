import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <h4>
          I guess in previous times they would have refered to you as
          WeaponMaster but today you will be known as...
        </h4>
        <h1>MEDIEVAL PERSONAL SHOPPER</h1>
        <Link to="/level1intro">Go forth!</Link>
      </div>
    );
  }
}
