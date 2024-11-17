import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { SidebarWithBurgerMenu } from '../components/Sidebar';

const videos = [
  {
    title: 'Kalamkari',
    src: '/src/assets/kalamkari.mp4',
    thumbnail: '/src/assets/kalamkari_tut.jpg',
    link: '/kalam1',
  },
  {
    title: 'Thanjavur Thattu',
    src: '/src/assets/thattu.mp4',
    thumbnail: '/src/assets/tj_thattu.jpeg',
    link: '/thattu',
  },
  {
    title: 'Tarkashi',
    src: '/src/assets/taksh.mp4',
    thumbnail: '/src/assets/tarkashi.jpg',
    link: '/simulation',
  },
  {
    title: 'Stone Carving',
    src: '/src/assets/stone.mp4',
    thumbnail: '/src/assets/stoness.jpg',
    link: '/stone',
  },
  {
    title: 'Dhokra',
    src: '/src/assets/dhokra.mp4',
    thumbnail: '/src/assets/dhokra_info_2.jpg',
    link: '/dhokra',
  },
  {
    title: 'Swords',
    src: '/src/assets/swordss.mp4',
    thumbnail: '/src/assets/swordss.jpg',
    link: '/indiswords',
  },
  {
    title: 'Thanjavur Thalaati Bommai',
    src: '/src/assets/thala.mp4',
    thumbnail: '/src/assets/thala.avif',
    link: '/3d-view',
  },
];

const Collection = () => {
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
    <div className="homepage flex flex-col min-h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64">
        <SidebarWithBurgerMenu />
      </div>

      <div className="p-8 ml-40">
        {/* Page Title */}
        <h1 className="text-5xl font-bold text-gray-100 text-center mb-8">Simulators</h1>

        {/* Video/Simulator Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
            <Link
            to={video.link}
            key={index}
            className="cursor-pointer transform transition duration-300 hover:scale-105"
            >
            <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 obj  ect-cover rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-gray-300 text-center">{video.title}</h3>
            </Link>
        ))}
        </div>

        {/* Video Modal */}
        {isOpen && currentVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center animate-fade-in">
            <div className="relative w-3/4 lg:w-2/4 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
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
                className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;
