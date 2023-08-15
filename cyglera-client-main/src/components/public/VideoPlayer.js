import React from "react";

const VideoPlayer = ({ videoUrl, onClose }) => {
  return (
    <div className="video-player">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-content size-lg">
        <div className="box">
          <video controls className="nax-video">
            <source src={videoUrl} type="video/mp4" />
          </video>

          <div className="has-text-right">
            <button className="button is-primary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;