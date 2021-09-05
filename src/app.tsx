import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RouteItem } from "./interfaces/routeItems";
import { routes } from "./util/routes";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          {routes.map((item: RouteItem) => (
            <Route
              key={`${item.key}`}
              path={`${item.path}`}
              component={item.component}
              exact
            />
          ))}
        </Switch>
      </Router>
    </div>
  );
}
