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
                    src={video.snippet.thumbnails.standard.url}
                    alt=""
                    className="img-responsive"
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="card-header">
                  <div className="card-title h5">{video.snippet.title}</div>
                </div>
                <div className="card-body">
                  <p style={{ fontSize: "13px", display: 'flex', flexWrap: 'wrap' }}>
                    {video.snippet.description}
                  </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">...</button>
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
