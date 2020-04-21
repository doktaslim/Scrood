import React, { useState, useEffect } from "react";
import UserLayout from "../components/Layout/UserLayout";
import VideoFeeds from "../components/VideoFeeds";
import Axios from "axios";
import { GoogleConfig } from "../config/GoogleLogin";
import UploadVideo from "../components/UploadVideo";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchVideos = () => {
    setLoading(true);
    Axios.get(
      ` https://www.googleapis.com/youtube/v3/videos?key=${GoogleConfig.api_key}`,
      {
        params: {
          part: "snippet",
          chart: "mostpopular",
          maxResults: 10,
        },
      }
    ).then((res) => {
      setLoading(false);
      setVideos(res.data.items);
    });
  };

  useEffect(() => {
    return fetchVideos();
  }, []);

  return loading ? (
    <div className="loading loading-lg" style={{ marginTop: "45vh" }}></div>
  ) : (
    <UserLayout>
      <UploadVideo />
      <VideoFeeds videos={videos} />
    </UserLayout>
  );
};

export default Dashboard;
