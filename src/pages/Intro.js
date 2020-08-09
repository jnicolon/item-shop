import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Intro extends Component {
  render() {
    return (
      <div
        className={
          window.location.pathname === "/"
            ? "intro dispaly-on"
            : "intro display-off"
        }
      >
        <h4>
          I guess in previous times they would have refered to you as
          WeaponMaster but today you will be known as...
        </h4>
        <h1>MEDIEVAL PERSONAL SHOPPER</h1>
        <Link to="/levelIntro">Start adventure!</Link>
      </div>
    );
  }
}
