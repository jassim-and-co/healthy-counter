import { Link, Route, Router } from "react-router-dom";
import React, { Component } from "react";

import EnergyPaymentForm from "./features/EnergyPaymentForm";
import FamiliList from "./features/FamilyList";
import MineralCounter from "./features/MineralCounter";
import Playground from "./features/Playground";
import create from "history/createBrowserHistory";

const history = create();

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <ul>
              <li>
                <Link to={"/"}>/</Link>
              </li>
              <li>
                <Link to={"/healthy-counter"}>Healthy counter</Link>
              </li>
              <li>
                <Link to={"/family-list"}>Family list</Link>
              </li>
              <li>
                <Link to={"/energy-payment-form"}>Energy Payment Form</Link>
              </li>
              <li>
                <Link to={"/playground"}>Playground</Link>
              </li>
            </ul>

            <Route path={"/healthy-counter"} component={MineralCounter} />
            <Route path={"/playground"} component={Playground} />
            <Route path={"/family-list"} component={FamiliList} />
            <Route
              path={"/energy-payment-form"}
              component={EnergyPaymentForm}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
