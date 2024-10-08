import VideoGallery from './VideoGallery';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Import the arrow icon

export default function BestSellerPage() {
  return (
    <div className="p-6 pl-6 bg-gray-900 min-h-screen mr-20 ml-40">
      {/* Tutorials Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-100 animate-fade-in text-center w-full">
          Tutorials
        </h1>
        <Link
          to="/all-tutorials"
          className="text-blue-400 hover:underline text-sm flex items-center whitespace-nowrap" // Added whitespace-nowrap
        >
          View More <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>
      <VideoGallery />

      {/* Models Section */}
      <div className="flex justify-between items-center mt-12 mb-6">
        <h2 className="text-3xl font-semibold text-gray-100 animate-fade-in text-center w-full">
          Models
        </h2>
        <Link
          to="/all-models"
          className="text-blue-400 hover:underline text-sm flex items-center whitespace-nowrap" // Added whitespace-nowrap
        >
          View More <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-4 ml-4">
        <Link to="/simulation" className='relative cursor-pointer transform transition duration-300 hover:scale-105'>
          <img
            src="/src/assets/model1.jpg"
            alt="Model 1"
            className="w-full h-36 object-cover rounded-lg shadow-md"
          />
          <h3 className="mt-2 text-gray-300 text-center">Model 1</h3>
        </Link>

        <Link to="/model2" className="cursor-pointer transform transition duration-300 hover:scale-105">
          <img
            src="/src/assets/model2.jpg"
            alt="Model 2"
            className="w-full h-36 object-cover rounded-lg shadow-md"
          />
          <h3 className="mt-2 text-gray-300 text-center">Model 2</h3>
        </Link>

        <Link to="/Quiz" className="cursor-pointer transform transition duration-300 hover:scale-105">
          <img
            src="/src/assets/kalamkari_tut.jpg"
            alt="Kalamkari"
            className="w-full h-36 object-cover rounded-lg shadow-md"
          />
          <h3 className="mt-2 text-gray-300 text-center">Kalmakari</h3>
        </Link>
      </div>
    </div>
  );
}
