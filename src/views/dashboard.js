import React, { useState, useEffect } from "react";
import UserLayout from "../components/Layout/UserLayout";
import VideoFeeds from "../components/VideoFeeds";
import Axios from "axios";
import { GoogleConfig } from "../config/GoogleLogin";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Axios.get(` https://www.googleapis.com/youtube/v3/videos?key=${GoogleConfig.api_key}`, {
      params: {
        part: 'snippet',
        chart: 'mostpopular',
        maxResults: 10
      }
    }).then(res => {
      console.log(res.data)
      setVideos(res.data.items)
      setLoading(false)
    })
  }, [])

  return loading ? <div className="loading loading-lg" style={{ marginTop: "45vh" }}></div> : (
    <UserLayout>
        <VideoFeeds videos={videos} />
    </UserLayout>
  );
};

export default Dashboard;
