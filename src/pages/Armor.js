import React, { Component } from "react";
import FilteredItems from "../components/itemsComponents/FilteredItems";

class Armor extends Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <>
        <FilteredItems path={path} />
      </>
    );
  }
}

export default Armor;
