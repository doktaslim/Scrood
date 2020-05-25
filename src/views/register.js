import React, { useState } from "react";
import { LOGIN } from "../routes/router";
import {
  Container,
  Col,
  Form,
  Alert,
  Button,
  Spinner,
} from "react-bootstrap";
import Firebase from "../Firebase";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const registerUser = async(e) => {
    e.preventDefault();
    try {
      if (name || email || password === "") return setErrorMessage("Please Fill In All Fields");
      if (password.length < 6)
        return setErrorMessage("Password cannot be less than 6 characters");
      else {
        setLoading(true);
        await Firebase.auth().createUserWithEmailAndPassword(name, email, password);
        await Firebase.auth().updateProfile({
          displayName: name
        })
        setLoading(false);
        return props.history.push(LOGIN);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(error.message);
    }
  };


  return loading ? (
    <Spinner animation="border" variant="primary" style={styles.spinner}>Loading</Spinner>
  ) : (
    <Container fluid>
      <Col sm={12} md={{ span: 6, offset: 3 }}>
        <h5 style={{ marginTop: '2rem' }}>Register</h5>
        <hr />
        <Form onSubmit={registerUser}>
          {errorMessage ? (
            <Alert variant="warning">{errorMessage}</Alert>
          ) : null}
          <Form.Group>
            <Form.Label htmlFor="username">Name</Form.Label>
            <Form.Control
              type="text"
              id="username"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

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
            REGISTER
          </Button>
        </Form>
        <hr />

        <Button size="md" variant='outline-success'>
          <i className="fas fa-google"></i> Google SignIn
        </Button>
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

export default Register;
