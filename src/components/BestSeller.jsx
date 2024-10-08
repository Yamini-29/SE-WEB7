import React from 'react';
import { Link } from 'react-router-dom';
import VideoGallery from './VideoGallery';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const models = [
  { id: 1, title: "Tarkashi Wood Carving", image: "/src/assets/tarkashi.jpg" },
  { id: 2, title: "Thanjavur Thattu", image: "src/assets/tj_thattu.jpeg" },
  { id: 3, title: "Kalamkari", image: "src/assets/kalamkari_tut.jpg" }
];

export default function BestSellerPage() {
  return (
    <div className="p-6 pl-6 bg-gray-900 min-h-screen mr-20 ml-40">
      {/* ...Tutorials Section... */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-100 animate-fade-in text-center w-full">
          Tutorials
        </h1>
        <Link
          to="/all-tutorials"
          className="text-blue-400 hover:underline text-sm flex items-center whitespace-nowrap"
        >
          View More <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>
      <VideoGallery />
      {/* Models Section */}
      <h2 className="text-3xl font-semibold text-gray-100 animate-fade-in text-center w-full mt-12 mb-6">
        Models
      </h2>

      <div className="grid grid-cols-3 gap-6 mt-4 ml-4">
        {models.map((model) => (
          <Link
            key={model.id}
            to={`/productinfo/${model.id}`}
            className='relative cursor-pointer transform transition duration-300 hover:scale-105'
          >
            <img
              src={model.image}
              alt={model.title}
              className="w-full h-36 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-gray-300 text-center">{model.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
