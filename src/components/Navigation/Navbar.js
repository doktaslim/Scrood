import React from "react";
import { Link } from "react-router-dom";
import { HOME, LOGIN, REGISTER } from "../../routes/router";

const styles = {
  navbar: {
    height: "60px",
    padding: "10px 25px"
  }
}

const Navigation = () => {
  return (
    <header className="navbar bg-secondary" style={styles.navbar}>
      <section className="navbar-section">
        <Link to={HOME} className="navbar-brand">UDEMY_CLONE</Link>
      </section>
      <section className="navbar-section">
        <Link to={LOGIN} className="btn btn-link">Login</Link>
        <Link to={REGISTER} className="btn btn-link">Register</Link>
      </section>
    </header>
  );
};


export default Navigation;

