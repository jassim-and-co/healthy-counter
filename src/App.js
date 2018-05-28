import { Link, Route, Router } from "react-router-dom";
import React, { Component } from "react";
import { flow, map } from "lodash/fp";

import BankPercent from "./features/BankPercent";
import Contacts from "./features/Contacts";
import EnergyPaymentForm from "./features/EnergyPaymentForm";
import FamiliList from "./features/FamilyList";
import { Grid } from "material-ui";
import MineralCounter from "./features/MineralCounter";
import Playground from "./features/Playground";
import create from "history/createBrowserHistory";

const history = create();

const Main = () => <h1>JavaScript Puzzles</h1>;

const PARTITIONS = [
  {
    link: "/",
    name: "Main Page",
    component: Main
  },
  {
    link: "/healthy-counter",
    name: "Health Counter",
    component: MineralCounter
  },
  {
    link: "/family-list",
    name: "Family List",
    component: FamiliList
  },
  {
    link: "/energy-payment-form",
    name: "Energy Payment Form",
    component: EnergyPaymentForm
  },
  {
    link: "/playground",
    name: "PlayGround",
    component: Playground
  },
  {
    link: "/contacts",
    name: "Contacts",
    component: Contacts
  },
  {
    link: "/bank-percent",
    name: "Bank %",
    component: BankPercent
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Grid container spacing={16}>
            <Grid item xs={12} md={3}>
              <ul>
                {flow(
                  map(part => (
                    <li key={part.link}>
                      <Link to={part.link}>{part.name}</Link>
                    </li>
                  ))
                )(PARTITIONS)}
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              {flow(
                map(part => (
                  <Route
                    key={part.link}
                    exact={true}
                    path={part.link}
                    component={part.component}
                  />
                ))
              )(PARTITIONS)}
            </Grid>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
