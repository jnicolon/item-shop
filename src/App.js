import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Weapons from "./pages/Weapons";
import Armor from "./pages/Armor";
import Spells from "./pages/Spells";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: {},
    };
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

export default App;
