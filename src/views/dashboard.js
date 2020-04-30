import React, { useState, useEffect } from "react";
import UserLayout from "../components/Layout/UserLayout";
import VideoFeeds from "../components/VideoFeeds";
import { Spinner } from "react-bootstrap";
import Axios from "axios";
import { GoogleConfig } from "../config/GoogleLogin";
import UploadVideo from "../components/UploadVideo";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  // const fetchVideos = () => {
  //   setLoading(true);
  //   Axios.get(
  //     ` https://www.googleapis.com/youtube/v3/videos?key=${GoogleConfig.api_key}`,
  //     {
  //       params: {
  //         part: "snippet",
  //         chart: "mostpopular",
  //         maxResults: 10,
  //       },
  //     }
  //   ).then((res) => {
  //     setLoading(false);
  //     setVideos(res.data.items);
  //   }).catch(error => {
  //     console.log(error);
  //   });
  // };

  const fetchVideos = () => {
    Axios.get(`http://localhost:4000/videos`).then(res => {
      console.log(res.data)
      setVideos(res.data)
    }).catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    return fetchVideos();
  }, []);

  return (
    <UserLayout>
      <UploadVideo />
      { loading ? <Spinner animation="border" variant="primary"></Spinner> : <VideoFeeds videos={videos} /> }
    </UserLayout>
  );
};

export default Dashboard;
