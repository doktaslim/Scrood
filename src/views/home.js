import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import LearnImg from "../assets/img/learning.svg";
import GoogleLogin from "react-google-login";
import { GoogleLoginID } from "../config/GoogleLogin";
import { DASHBOARD } from "../routes/router";

const styles = {
  left: {
    margin: "auto",
    marginLeft: "20px",
  },
};

const Home = props => {
  const [loading, setLoading] = useState(false)

  const responseGoogle = async user => {
    try {
      setLoading(true)
      console.log(user)
      await sessionStorage.setItem("user", JSON.stringify(user));
      setLoading(false)
      return props.history.push(DASHBOARD);
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  };

  return loading ? <Spinner variant="primary" animation="border" /> : (
    <Layout>
      <Container fluid>
        <Row>
          <Col style={styles.left}>
            <h4 style={{ fontSize: "4rem" }}>Improve Your Skill</h4>
            <h5 style={{ fontSize: "2rem", marginBottom: "20px" }}>
              Learn Online Today
            </h5>
            <GoogleLogin
              clientId={GoogleLoginID.client_id}
              render={(renderProps) => (
                <Button
                  variant="secondary"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign Up Now
                </Button>
              )}
              buttonText="Login"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </Col>
          <Col>
            <Image src={LearnImg} fluid />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
