import React from "react";

const VideoFeeds = (props) => {
  return (
    <>
      <div className="container">
        <div className="columns">
          {props.videos.map((video) => (
            <div className="column col-sm-12 col-md-6 col-3" key={video.id}>
              <div className="card" style={{ margin: "20px" }}>
                <div className="card-image">
                  <img
                    src={video.snippet.thumbnails.default.url}
                    alt=""
                    className="img-responsive"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="card-body">
                  <p style={{ fontSize: "15px" }}>{video.snippet.title}</p>
                  <p style={{ fontSize: "13px" }}>
                    {video.snippet.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoFeeds;