import { Link, Route, Router } from "react-router-dom";
import React, { Component } from "react";

import FamiliList from "./features/FamilyList";
import MineralCounter from "./features/MineralCounter";
import create from "history/createBrowserHistory";

const history = create();

const FirstWebPageOfMyBrother = () => (
  <div>
    <div class="container">
      <h3>Please complete this form to connect database:</h3>

      <form method="post" class="form-inline">
        <p>
          Hostname:
          <input
            type="text"
            name="hostname"
            class="form-control"
            size="20"
            placeholder="Please input hostname"
          />
        </p>

        <p>
          Database:
          <input
            type="text"
            class="form-control"
            name="databasename"
            size="20"
            placeholder="database name"
          />
        </p>

        <p>
          Username:
          <input
            type="text"
            name="user"
            class="form-control"
            size="20"
            placeholder="Please input user name"
          />
        </p>

        <p>
          Password:
          <input
            type="password"
            class="form-control"
            name="password"
            size="20"
            placeholder="password"
          />
        </p>

        <input
          type="submit"
          name="submit"
          class="btn btn-info"
          value="Connect"
        />
      </form>
    </div>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <ul>
              <li>
                <Link to={"/1"}>Healthy counter</Link>
              </li>
              <li>
                <Link to={"/family-list"}>Family list</Link>
              </li>
            </ul>

            <Route path={"/1"} component={MineralCounter} />

            <Route path={"/family-list"} component={FamiliList} />

            <Route
              path={"/js-first-page"}
              component={FirstWebPageOfMyBrother}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
