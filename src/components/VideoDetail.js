import React from "react";

const VideoDetail = ({ video }) => {
  // Returns something if no video is selected so we don't get an error
  if (!video) {
    return <div>Loading...</div>;
  }

  //                                    ES2015 template String
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="Video Player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
