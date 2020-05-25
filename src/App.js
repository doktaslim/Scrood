import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HOME, REGISTER, LOGIN, DASHBOARD } from "./routes/router";
import Home from "./views/home";
import Register from "./views/register";
import Login from "./views/login";
import Dashboard from "./views/dashboard";
import Firebase from "./Firebase";
import {Button, Nav, Navbar} from "react-bootstrap"
import ProtectedRoute from "./routes/ProtectedRoute";

const App = (props) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(user => {
        user ? setAuthenticated(true) : setAuthenticated (false)
    })
  });

  const logout = async () => {
    await Firebase.auth().signOut()
    return props.history.push(LOGIN);
  }


  return (
    <Router>
      <div>
        {!authenticated && (
          <Navbar expand="sm" style={styles.navbar}>
            <Navbar.Brand href={HOME} style={styles.text}>Udemy-Clone</Navbar.Brand>
            <Navbar.Toggle aria-controls="nav" />
            <Navbar.Collapse id="nav">
              <Nav className="ml-auto">
                <Nav.Link href={LOGIN} style={styles.text}>Login</Nav.Link>
                <Nav.Link href={REGISTER} style={styles.text}>Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}

        {authenticated && (
          <Navbar expand="sm" style={styles.navbar}>
            <Navbar.Brand style={styles.text}>Udemy-Clone</Navbar.Brand>
            <Navbar.Toggle aria-controls="nav" />
            <Navbar.Collapse id="nav">
              <Nav className="ml-auto">
                <Button variant="danger" size="sm" onClick={logout}>
                  <i className="fas fa-power-off"></i>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )}
      </div>

      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route path={REGISTER} component={Register} />
        <Route path={LOGIN} component={Login} />
        <ProtectedRoute authenticated={authenticated} path={DASHBOARD} component={Dashboard} />
      </Switch>
    </Router>
  )
};

const styles = {
  navbar: {
    background: "#1b2331"
  },
  text: {
    color: "#FFF"
  }
};

export default App;
