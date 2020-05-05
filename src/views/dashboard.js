import React, { useState, useEffect } from "react";
import UserLayout from "../components/Layout/UserLayout";
import VideoFeeds from "../components/VideoFeeds";
import { Spinner } from "react-bootstrap";
import Axios from "axios";
import UploadVideo from "../components/UploadVideo";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVideos = () => {
    setLoading(true)
    Axios.get(`http://localhost:4000/videos`).then(res => {
      const videoData = res.data;
      const video = localStorage.getItem("videoData", videoData)
      console.log(video)
      setVideos(videos)
      setLoading(false)
    }).catch(err => {
      console.log(err);
      setLoading(false);
    })
  }

  useEffect(() => {
    return fetchVideos();
  }, []);
  

  return (
    <UserLayout>
      <UploadVideo />
      { loading ? <Spinner animation="border" variant="primary" style={{ margin: "25vh auto" }}></Spinner> : <VideoFeeds videos={videos} /> }
    </UserLayout>
  );
};

export default Dashboard;
