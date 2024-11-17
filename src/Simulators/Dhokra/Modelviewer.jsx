import React, { useState } from "react";
import Sidebar from "./Designs";
import VideoPlayer from "./dhokraSimulator";

function VideoPlayerPage() {
  const [videoSrc, setVideoSrc] = useState(null);
  const [fact, setFact] = useState("");

  const handleSelectVideo = (src, fact) => {
    setVideoSrc(src);
    setFact(fact);
  };

  return (
    <div className="flex h-screen">
      <Sidebar onSelectVideo={handleSelectVideo} />
      <div className="flex-1">
        {videoSrc ? (
          <VideoPlayer videoSrc={videoSrc} fact={fact} />
        ) : (
          <div className="flex justify-center items-center h-screen bg-black text-white">
            Select a video from the sidebar to start playing.
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPlayerPage;
