import { useState } from 'react';

const videos = [
  {
    title: 'Thanjavur Bommai',
    src: '/src/assets/ThanjavurBommaTutorial.mp4',
    thumbnail: '/src/assets/thala.avif',
  },
  {
    title: 'Kalamkari',
    src: '/src/assets/kalamkari.mp4',
    thumbnail: '/src/assets/kalamkari_tut.jpg',
  },

  {
    title: 'Dhokra',
    src: '/src/assets/dhokraVideo.mp4',
    thumbnail: '/src/assets/dhokra_info_2.jpg',
  },


  {
    title: 'Tarkashi',
    src: '/src/assets/taksh.mp4',
    thumbnail: '/src/assets/tarkashi.jpg',
  },
  {
    title: 'Stone Carving',
    src: '/src/assets/StoneCarvingTutorial.mp4',
    thumbnail: '/src/assets/stoness.jpg',
  },

  {
    title: 'Swords',
    src: '/src/assets/IndianSword.mp4',
    thumbnail: '/src/assets/swordss.jpg',
  },

  {
    title: 'Thanjavur Thattu',
    src: '/src/assets/thattu.mp4',
    thumbnail: '/src/assets/tj_thattu.jpeg',
  },
  
];

const Tutorials = () => {
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
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center text-gray-100 mb-8">Tutorials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => openModal(video)}
          >
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-gray-300 text-center">{video.title}</h3>
          </div>
        ))}
      </div>

      {/* Modal */}
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
  );
};

export default Tutorials;
