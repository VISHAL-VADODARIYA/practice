import React, { useRef } from "react";
import axios from "axios";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const playVideo = async () => {
    try {
      const videoUrl = document.getElementById("video-url").value;
      const response = await axios.get(videoUrl, {
        responseType: "blob",
      });
      const videoBlob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      const videoSrc = URL.createObjectURL(videoBlob);
      videoRef.current.src = videoSrc;
      videoRef.current.play();
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  return (
    <div>
      <input type="text" id="video-url" placeholder="Enter video URL" />
      <button onClick={playVideo}>Play Video</button>
      <video ref={videoRef} controls />

      



    </div>
  );
};

export default VideoPlayer;
















