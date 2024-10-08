import VideoGallery from './VideoGallery';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline'; // Import the arrow icon

export default function BestSellerPage() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen mx-auto max-w-7xl"> {/* Adjusted padding and max-width */}
      {/* Tutorials Section */}
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

      {/* Video Gallery */}
      <VideoGallery />

    </div>
  );
}
