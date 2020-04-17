import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME, REGISTER, LOGIN, DASHBOARD } from "./routes/router";
import Home from "./views/home";
import Register from "./views/register";
import Login from "./views/login";
import Dashboard from "./views/dashboard";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={REGISTER} component={Register} />
        <Route path={LOGIN} component={Login} />
        <Route path={DASHBOARD} component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
