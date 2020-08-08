import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  render() {
    return (
      <div className={this.state.display ? "intro" : "intro display-off"}>
        <h4>
          I guess in previous times they would have refered to you as
          WeaponMaster but today you will be known as...
        </h4>
        <h1>MEDIEVAL PERSONAL SHOPPER</h1>
        <Link
          onClick={() => this.setState({ display: false })}
          to="/levelIntro"
        >
          Start adventure!
        </Link>
      </div>
    );
  }
}
