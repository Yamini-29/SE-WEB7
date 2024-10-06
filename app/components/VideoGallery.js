// components/VideoGallery.js

import { useState } from 'react';
import { assets } from '../assets/assets';
const videos = [
  {
    title: 'Iridescent Material',
    src: 'assets/kalamkari.mp4', // Replace with your actual video path
    thumbnail: '/assets/cloth.jpg',
  },
  {
    title: 'Flat 3D',
    src: 'assets/kalamkari.mp4', // Replace with your actual video path
    thumbnail: '/assets/cloth.jpg',
  },
  // Add more videos as needed
];

const VideoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (video) => {
    setCurrentVideo(video);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentVideo(null);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="relative cursor-pointer hover:scale-110 transform transition duration-300"
            onClick={() => openModal(video)}
          >
            <img src={video.thumbnail} alt={video.title} className="w-64 h-36 object-cover rounded-lg" />
            <h3 className="text-center mt-2">{video.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && currentVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="relative w-3/4 bg-white rounded-lg overflow-hidden shadow-lg">
            <video
              controls
              src={currentVideo.src}
              className="w-full h-auto"
              autoPlay
            >
              Your browser does not support the video tag.
            </video>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoGallery;
