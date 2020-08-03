import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Weapons from "./pages/Weapons";
import Armor from "./pages/Armor";
import Spells from "./pages/Spells";
import Intro from "./pages/Intro";
import CartPage from "./pages/CartPage";
import SelectedItemInfo from "./components/SelectedItemInfo";
import { connect } from "react-redux";
import * as api from "./redux/middleWare/itemsApi";
import * as itemActions from "./redux/actions/itemActions";
import BattlePage from "./pages/BattlePage";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div
        className="main-container"
        //function designed to de-select the selected item when you click anywhere on the screen.
        onClick={(e) =>
          this.props.selectedItem.itemName !== "" &&
          !e.target.className.includes("single-item") &&
          !e.target.className.includes("single-item-selected") &&
          this.props.selectItem({ itemName: "" })
        }
      >
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route path="/Weapon" component={Weapons} />
            <Route path="/Armor" component={Armor} />
            <Route path="/Spell" component={Spells} />
            <Route path="/CartPage" component={CartPage} />
            <Route path="/BattlePage" component={BattlePage} />
          </Switch>
          <SelectedItemInfo />
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    selectedItem: state.items.selectedItem,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchItems: () => dispatch(api.fetchItems()),
    selectItem: (item) => dispatch(itemActions.selectItem(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
