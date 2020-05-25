import React, { useState } from "react";
import { withRouter } from 'react-router-dom'
import { DASHBOARD } from "../routes/router";
import {
  Container,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import Firebase from "../Firebase";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const loginUser = async(e) => {
    e.preventDefault();
    try {
      if (email === "") return setErrorMessage("Please Input Your Email");
      if (password === "") return setErrorMessage("Please Input Your Password");
      else {
        setLoading(true);
        await Firebase.auth().signInWithEmailAndPassword(email, password);
        setLoading(false);
        return props.history.replace(DASHBOARD);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };


  return loading ? (
    <Spinner animation="border" variant="primary" style={styles.spinner}></Spinner>
  ) : (
    <Container fluid>
      <Col sm={12} md={{ span: 6, offset: 3 }}>
        <h5 style={{ marginTop: '3rem' }}>Login</h5>
        <hr />

        <Form onSubmit={loginUser}>
          {errorMessage ? (
            <Alert variant="warning">{errorMessage}</Alert>
          ) : null}
          <Form.Group>
            <Form.Label htmlFor="email">Email Address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" size="md" type="submit" block>
            Login
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

const styles = {
  spinner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default withRouter(Login)
