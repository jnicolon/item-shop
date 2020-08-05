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
import GoldModal from "./components/GoldModal";
import { toggleGoldModal } from "./redux/actions/modalActions";
import Level1Intro from "./pages/Level1Intro";
import Level2Intro from "./pages/Level2Intro";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    //function designed to de-select the selected item when you click anywhere on the screen.
    const deSelectItem = (e) => {
      this.props.selectedItem.itemName !== "" &&
        !e.target.className.includes("single-item") &&
        !e.target.className.includes("single-item-selected") &&
        this.props.selectItem({ itemName: "" });
    };

    const closeModal = (e) => {
      e.target.className.includes("gold-modal-on") &&
        this.props.toggleGoldModal(false);
    };

    const handleClick = (e) => {
      deSelectItem(e);
      closeModal(e);
    };

    return (
      <div className="main-container" onClick={(e) => handleClick(e)}>
        <BrowserRouter>
          <GoldModal />
          <Header />

          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/level1intro" component={Level1Intro} />
            <Route exact path="/level2intro" component={Level2Intro} />
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
    toggleGoldModal: (status) => dispatch(toggleGoldModal(status)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
