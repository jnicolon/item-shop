import React, { Component } from "react";
import TopHeader from "./TopHeader";
import NavBar from "./NavBar";

export default class Header extends Component {
  render() {
    return (
      <>
        <TopHeader />
        <NavBar />
      </>
    );
  }
}
