import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HOME, LOGIN, REGISTER } from "../../routes/router";

const styles = {
  navbar: {
    height: "60px",
    padding: "10px 25px",
    background: "#1b3331"
  },
  text: {
    color: "#FFF"
  }
};

const Navigation = () => {
  return (
    <Navbar expand="lg" style={styles.navbar}>
      <Navbar.Brand href={HOME} style={styles.text}>Udemy-Clone</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href={LOGIN} style={styles.text}>Login</Nav.Link>
        <Nav.Link href={REGISTER} style={styles.text}>Register</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
