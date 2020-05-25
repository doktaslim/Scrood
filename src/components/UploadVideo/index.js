import React, { useState } from "react";
import { Button, Modal, Form, Spinner } from "react-bootstrap";
import Axios from "axios";
import Firebase from '../../Firebase'

const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let db = Firebase.firestore();
  db.collection('Videos').add({
    title: title,
    description: description,
    video: video,
  }).then(docRef => {
    console.log("Document written with ID: ", docRef.id)
  }).catch(error => {
    console.log(error)
  })


  const getVideo = (e) => {
    let file = e.target.files[0];
    let db = Firebase.firestore();
    const formData = new FormData();
    // formData.append("upload_preset", "udemy-clone");
    formData.append("file", file);
    Axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDNAME}/upload`,
      formData
    ).then((res) => {
      setVideo(res.data);
    });
  };

  // const uploadVideo = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   Axios.post(`http://localhost:4000/videos`, {
  //     title: title,
  //     description: description,
  //     video: video,
  //   })
  //     .then(() => {
  //       setLoading(false);
  //       return (
  //         (
  //           <h5 style={{ textAlign: "center", margin: "20vh 0" }}>
  //             Video Uploaded
  //           </h5>
  //         ) && setShow(false)
  //       );
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };



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
            {video === "" ? (
              <Button disabled variant="primary" size="sm">
                Upload
              </Button>
            ) : (
              <Button variant="primary" size="sm" onClick={uploadVideo}>
                Upload
              </Button>
            )}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default UploadVideo;
