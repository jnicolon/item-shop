import React, { Component } from "react";
import { connect } from "react-redux";
import * as itemActions from "../redux/actions/itemActions";
import * as api from "../api/itemsApi";

class Weapons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      items: [],
      error: "",
    };
  }

  componentDidMount() {
    this.props.dispatch(api.fetchItems());
  }

  render() {
    const renderItems = this.props.items.items.map((key) => {
      return (
        <div className="single-item" key={key.fields.id}>
          <img src={key.fields.image.fields.file.url} alt={key.fields.id} />
        </div>
      );
    });

    return <div className="item-container">{renderItems}</div>;
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(Weapons);
