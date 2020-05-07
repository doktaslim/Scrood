import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const VideoFeeds = (props) => {
  return (
    <>
      <Container fluid>
        <Row>
          {props.videos.map((video) => (
            <Col sm={12} md={4} lg={3} key={video.id} >
              <Card style={{marginBottom: "20px"}}>
                <Card.Img
                  variant="top"
                  src={video.video.url}
                  alt={video.title}
                />
                <Card.Body onClick={props.playVideo}>
                  <Card.Title>{video.title}</Card.Title>
                  <Card.Text>{video.description}</Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Text onClick={props.starVideo}><i className="fas fa-star"></i> Star Video</Card.Text>
                  <Card.Text><i className="fas fa-heart"></i> Add to Favourite</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Uploaded at {video.video.created_at}
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default VideoFeeds;
