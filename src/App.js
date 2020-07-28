import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Weapons from "./pages/Weapons";
import Armor from "./pages/Armor";
import Spells from "./pages/Spells";
import { connect } from "react-redux";
import * as api from "./api/itemsApi";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(api.fetchItems());
  }

  render() {
    return (
      <div className="main-container">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Weapons} />
            <Route path="/Armor" component={Armor} />
            <Route path="/Spells" component={Spells} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

export default connect(mapStateToProps)(App);
