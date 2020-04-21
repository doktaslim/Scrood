import React, { useState } from "react";
import Axios from "axios";
import { GoogleConfig } from "../../config/GoogleLogin";

const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [video, setVideo] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadVideo = () => {
    let token = sessionStorage.getItem("user");
    let accessToken = token.tc.access_token;
    setLoading(true);
    Axios.post(
      `https://www.googleapis.com/youtube/v3/videos?key=${GoogleConfig.api_key}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "applicationCache/json",
          "Content-Type": "application/json",
        },
        data: {
          title: title,
          description: description,
          thumbnail: thumbnail,
          video: video,
        },
      }
    )
      .then((res) => {
        setLoading(false);
        console.log("Successfully Uploaded", res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return loading ? (
    <div className="loading loading-lg" style={{ marginTop: "45vh" }}></div>
  ) : (
    <div>
      <form onSubmit={uploadVideo}>
        <div className="form-group">
          <label htmlFor="video" className="form-label">
            Video Title
          </label>
          <input
            type="text"
            className="form-input"
            id="video"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Video Description
          </label>
          <input
            type="text"
            className="form-input"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="thumbnail">Video Thumbnail</label>
          <input
            type="text"
            className="form-input"
            id="thumbnail"
            onChange={(e) => setThumbnail(e.target.value)}
            value={thumbnail}
          />
        </div>

        <div className="form-group">
          <label htmlFor="video">Upload Video</label>
          <input
            type="file"
            className="form-control-file"
            id="video"
            onChange={(e) => setVideo(e.target.value)}
            value={video}
          />
        </div>

        <div className="form-group">
          <button className="btn btn-primary">Upload Video</button>
        </div>
      </form>
    </div>
  );
};

export default UploadVideo;
