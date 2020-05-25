import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const VideoFeeds = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={4} lg={3}>
          <Card style={{marginBottom: "20px"}}>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Title</Card.Title>
              <Card.Text>Description</Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text><i className="fas fa-star"></i> Star Video</Card.Text>
              <Card.Text><i className="fas fa-heart"></i> Add to Favourite</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">
                Uploaded at
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoFeeds;
