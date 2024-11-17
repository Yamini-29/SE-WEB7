import React, { useEffect, useRef } from "react";

function VideoPlayer({ videoSrc, fact }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [videoSrc]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-black">
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted
        className="max-w-full max-h-[70%] outline-none"
      />
      <div
        className="mt-4 bg-white text-black p-4 rounded-lg shadow-lg transition-opacity duration-700"
        style={{
          opacity: fact ? 1 : 0,
          transform: fact ? "translateY(0)" : "translateY(20px)",
        }}
      >
        {fact}
      </div>
    </div>
  );
}

export default VideoPlayer;
