import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME, DASHBOARD } from "./routes/router";
import Home from "./views/home";
import Dashboard from "./views/dashboard";
import "./index.css"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={DASHBOARD} component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
