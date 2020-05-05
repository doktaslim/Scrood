import React, { useState } from "react";
import { Button, Modal, Form, Spinner } from "react-bootstrap";
import Axios from "axios";

const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getVideo = (e) => {
    let file = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "udemy-clone");
    formData.append("file", file);
    const cloudName = "gozzycloud";
    Axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
      formData
    ).then((res) => {
      setVideo(res.data);
    });
  };

  const uploadVideo = (e) => {
    e.preventDefault();
    setLoading(true);
    Axios.post(`http://localhost:4000/videos`, {
      id: Math.floor(Math.random() * 1000).toString(),
      title: title,
      description: description,
      video: video,
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        const videoData = res.data;
        localStorage.setItem("videoData", videoData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return loading ? (
    <Spinner animation="border" variant="primary"></Spinner>
  ) : (
    <>
      <Button variant="primary" onClick={handleShow}>
        Upload Video
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Video Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Video Description</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Select Video</Form.Label>
              <Form.Control type="file" onChange={getVideo} />
            </Form.Group>
            <Button variant="primary" size="sm" onClick={uploadVideo}>
              Upload
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UploadVideo;
