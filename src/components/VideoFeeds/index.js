import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const VideoFeeds = (props) => {
  return (
    <Container fluid>
      <Row>
        {props.videos.map((video) => (
          <Col sm={12} md={4} lg={3} key={video.id}>
            <Card>
              <Card.Img variant="top" src={video.thumbnail} alt={video.title} />
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <Card.Text>{video.description}</Card.Text>
                <Card.Text>
                  <>
                    <i className="fas fa-heart">Add to Favourite</i>
                    <i className="fas fa-star">Star Video</i>
                  </>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Uploaded {video.timeUploaded}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VideoFeeds;
