import React, { Component } from "react";
import FilteredItems from "../components/itemsComponents/FilteredItems";

class Spells extends Component {
  render() {
    const path = this.props.location.pathname;
    return (
      <>
        <FilteredItems path={path} />
      </>
    );
  }
}

export default Spells;
