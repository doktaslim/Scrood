import React, { useState } from "react";
import { Button, Modal, Form, Spinner } from "react-bootstrap";
import Axios from "axios";

const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const uploadWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "gozzycloud",
      uploadPreset: "udemy-clone",
    },
    (err, result, id) => {
      if (!err && result && result.event === "success") {
        console.log("This is the result of the upload:", result);
        setLoading(true);
        const videoInfo = result.info.url;
        Axios.post(`http://localhost:4000/users/${id}?_embed=videos`, {
          ...videoInfo,
          title: title,
          description: description,
          id: Math.floor(Math.random() * 1000).toString(),
        })
          .then((res) => {
            setLoading(false);
            console.log(res.data);
          })
          .catch((error) => {
            setLoading(false);
            console.log(error);
          });
      } else {
        console.log(err);
      }
    }
  );

  const displayWidget = () => {
    return uploadWidget.open();
  };

  return loading ? (
    <Spinner animation="border" variant="primary" />
  ) : (
    <>
      {/* <Button variant="primary" onClick={displayWidget}>
        Upload Video
      </Button> */}
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
              <Form.Control type="file" onClick={displayWidget} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" size="sm" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" size="sm">
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UploadVideo;
