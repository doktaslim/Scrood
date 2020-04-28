import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { REGISTER } from "../routes/router";

const styles = {
  left: {
    margin: "25vh 0",
    marginLeft: "20px",
  },
  img: {
    margin: "5vh 0",
  },
};

const Home = () => {
  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col sm={12} md={6}>
            <Image
              style={styles.img}
              fluid
              alt=""
              src="https://res.cloudinary.com/gozzycloud/image/upload/v1587036086/learning_mrewjg.svg"
            />
          </Col>
          <Col md={6}>
            <div style={styles.left}>
              <h4 style={{ fontSize: "3.5rem" }}>Improve Your Skill</h4>
              <h5 style={{ fontSize: "2rem", marginBottom: "20px" }}>
                Learn Online Today
              </h5>
              <Link to={REGISTER}>
                <Button variant="primary">Get Started</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Home;
