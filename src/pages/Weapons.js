import React, { Component } from "react";
import FilteredItems from "../components/FilteredItems";

class Weapons extends Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <>
        <FilteredItems path={path} />
      </>
    );
  }
}

export default Weapons;
