import React, { useState } from "react";
import { DASHBOARD } from "../routes/router";
import { GoogleLogin } from "react-google-login";
import Layout from "../components/Layout/Layout";
import { Container, Card, Col, Form, Alert, Button } from "react-bootstrap";
import Axios from "axios";

const Register = (props) => {
  const [errorMessage, setErrorMessage] = useState(null);

  const responseGoogle = (user) => {
    try {
      if (user) {
        Axios.post("http://localhost:4000/users", {
          id: user.googleId,
          fname: user.profileObj.name,
          email: user.profileObj.email,
        })
          .then((resp) => resp.data)
          .then(sessionStorage.setItem("user", JSON.stringify(user)))
          .catch((error) => setErrorMessage(error.message));
      }
      return props.history.push(DASHBOARD);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <Layout>
      <Container fluid>
        <Col sm={12} md={{ span: 6, offset: 3 }}>
          <Card style={{ margin: "4rem" }}>
            <Card.Body>
              <h5>Register</h5>
              <hr />
              <Form>
                {errorMessage ? <Alert>{errorMessage}</Alert> : null}

                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Button variant="primary" size="md" block>
                  Register
                </Button>

                <hr />
                <div style={{ textAlign: "center" }}>
                  <GoogleLogin
                    className="my-2"
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    buttonText="SignUp With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </Layout>
  );
};

export default Register;
