import React from "react";

const VideoDetail = ({ video }) => {
  // Returns something if no video is selected so we don't get an error
  if (!video) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
