import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const VideoFeeds = (props) => {
  return (
    <Container fluid>
      <Row>
        {props.videos.map((video) => (
          <Col sm={12} md={4} lg={3} key={video.id}>
            <Card>
              <Card.Img
                variant="top"
                src={video.snippet.thumbnails.standard.url}
                alt={video.snippet.title}
              />
              <Card.Body>
                <Card.Title>{video.snippet.title}</Card.Title>
                <Card.Text>{video.snippet.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VideoFeeds;
