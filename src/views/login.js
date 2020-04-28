import React from "react";
import Layout from "../components/Layout/Layout";
import { Container, Card, Col, Form, Button } from "react-bootstrap";

const Login = () => {
  return (
    <Layout>
      <Container fluid>
        <Col sm={12} md={{ span:6, offset: 3 }}>
          <Card style={{ margin: "4rem" }}>
            <Card.Body>
              <h5>Login</h5>
              <hr />
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Button variant="primary" size="md" block>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </Layout>
  );
};

export default Login;

