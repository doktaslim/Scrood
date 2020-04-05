import React from "react";
import Layout from "../components/Layout/Layout";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
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

const Home = (props) => {
  const responseGoogle = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    props.history.push(DASHBOARD);
  };

  return (
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
                  Sign Up as Student
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
