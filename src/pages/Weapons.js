import React, { Component } from "react";
import { connect } from "react-redux";
import * as itemActions from "../redux/actions/itemActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class Weapons extends Component {
  componentDidMount() {
    this.props.actions.loadItems().catch((error) => {
      alert("Loading error" + error);
    });
  }

  render() {
    return <div></div>;
  }
}

Weapons.propTypes = {
  dispatch: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Weapons);
