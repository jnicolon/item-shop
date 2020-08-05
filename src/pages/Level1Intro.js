import React, { Component } from "react";
import { Link } from "react-router-dom";
import DrawText from "../components/text components/DrawText";
export default class Intro extends Component {
  render() {
    return (
      <>
        <div className="intro">
          <DrawText />
          <Link to="/level1intro">Go forth!</Link>
        </div>
      </>
    );
  }
}
