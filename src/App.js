import React from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Weapons from "./pages/Weapons";
import Armor from "./pages/Armor";
import Spells from "./pages/Spells";
import Intro from "./pages/Intro";
import CartPage from "./pages/CartPage";
import SelectedItemInfo from "./components/SelectedItemInfo";
import LevelIntro from "./pages/LevelIntro";
import { connect } from "react-redux";
import * as api from "./redux/middleWare/itemsApi";
import * as itemActions from "./redux/actions/itemActions";
import BattlePage from "./pages/BattlePage";
import Modal from "./components/Modal";
import { toggleGoldModal } from "./redux/actions/modalActions";
import { setCurrentLevel } from "./redux/actions/levelActions";
import IntroFightDetails from "./pages/LevelIntroFightDetails";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchItems();
    this.props.setCurrentLevel();
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
      if (e.target.className.includes("display-on")) {
        this.props.toggleGoldModal(false);
      }
    };

    const handleClick = (e) => {
      deSelectItem(e);
      closeModal(e);
    };

    return (
      <div className="main-container" onClick={(e) => handleClick(e)}>
        <HashRouter>
          <Modal
            modalTxt="You don't have enough gold!"
            modalStatus={this.props.goldModal}
          />
          <Header />
          <Intro />
          <Switch>
            <Route exact path="/" component={Intro} />
            <Route exact path="/levelIntro" component={LevelIntro} />
            <Route path="/Weapon" component={Weapons} />
            <Route path="/Armor" component={Armor} />
            <Route path="/Spell" component={Spells} />
            <Route path="/CartPage" component={CartPage} />
            <Route path="/BattlePage" component={BattlePage} />
            <Route path="/introFightDetails" component={IntroFightDetails} />
          </Switch>
          <SelectedItemInfo />
        </HashRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    selectedItem: state.items.selectedItem,
    currentHeroGold: state.level.currentLevel.hero.gold,
    goldModal: state.modal.goldModal,
    weaponNumerModal: state.modal.weaponNumberModal,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchItems: () => dispatch(api.fetchItems()),
    selectItem: (item) => dispatch(itemActions.selectItem(item)),
    toggleGoldModal: (status) => dispatch(toggleGoldModal(status)),
    setCurrentLevel: () => dispatch(setCurrentLevel()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
