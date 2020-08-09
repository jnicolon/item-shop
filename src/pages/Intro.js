import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Intro extends Component {
  render() {
    return (
<<<<<<< HEAD
      // <div className={this.state.display ? "intro" : "intro display-off"}>
      <div className="intro">
=======
      <div
        className={
          window.location.pathname === "/"
            ? "intro dispaly-on"
            : "intro display-off"
        }
      >
>>>>>>> parent of 626afbe... intro change with state display
        <h4>
          I guess in previous times they would have refered to you as
          WeaponMaster but today you will be known as...
        </h4>
        <h1>MEDIEVAL PERSONAL SHOPPER</h1>
<<<<<<< HEAD
        <Link
          //onClick={() => this.setState({ display: false })}
          to="/levelIntro"
        >
          Start adventure!
        </Link>
=======
        <Link to="/levelIntro">Start adventure!</Link>
>>>>>>> parent of 626afbe... intro change with state display
      </div>
    );
  }
}
