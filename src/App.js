import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Weapons from "./pages/Weapons";
import Armor from "./pages/Armor";
import Spells from "./pages/Spells";
import Intro from "./pages/Intro";
import CartPage from "./pages/CartPage";
import { connect } from "react-redux";
import * as api from "./redux/middleWare/itemsApi";

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
            <Route exact path="/" component={Intro} />
            <Route path="/Weapon" component={Weapons} />
            <Route path="/Armor" component={Armor} />
            <Route path="/Spell" component={Spells} />
            <Route path="/CartPage" component={CartPage} />
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
