import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container";
import { HOME } from "../../routes/router";

const Navigation = () => {
  return (
    <>
      <Navbar bg="light" expand="sm">
        <Container fluid>
          <Navbar.Brand>
            <Link to={HOME}>UDEMY_CLONE</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
