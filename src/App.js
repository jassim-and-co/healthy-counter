import { Link, Route, Router } from "react-router-dom";
import React, { Component } from "react";

import Contacts from "./features/Contacts";
import EnergyPaymentForm from "./features/EnergyPaymentForm";
import FamiliList from "./features/FamilyList";
import { Grid } from "material-ui";
import MineralCounter from "./features/MineralCounter";
import Playground from "./features/Playground";
import create from "history/createBrowserHistory";

const history = create();

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <ul>
                <li>
                  <Link to={"/"}>/</Link>
                </li>
                <li>
                  <Link to={"/healthy-counter"}>Healthy counter</Link>
                </li>
                <li>
                  <Link to={"/family-list"}>Simple Form</Link>
                </li>
                <li>
                  <Link to={"/energy-payment-form"}>Energy Payment Form</Link>
                </li>
                <li>
                  <Link to={"/playground"}>Playground</Link>
                </li>
                <li>
                  <Link to={"/contacts"}>Contacts</Link>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Route path={"/healthy-counter"} component={MineralCounter} />
              <Route path={"/playground"} component={Playground} />
              <Route path={"/family-list"} component={FamiliList} />
              <Route path={"/contacts"} component={Contacts} />
              <Route
                path={"/energy-payment-form"}
                component={EnergyPaymentForm}
              />
            </Grid>
          </Grid>
        </Router>
      </div>
    );
  }
}

export default App;
