import React from 'react';
import { Link } from 'react-router-dom';
import VideoGallery from './VideoGallery';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Use this import for Navigation module

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const models = [
  { id: 1, title: "Tarkashi Wood Carving", image: "/src/assets/tarkashi.jpg", description: "A beautiful form of wood carving known as Tarkashi." },
  { id: 2, title: "Thanjavur Thattu", image: "/src/assets/tj_thattu.jpeg", description: "Traditional Thanjavur plates, known for their unique design." },
  { id: 3, title: "Kalamkari", image: "/src/assets/kalamkari_tut.jpg", description: "Hand-painted or block-printed art on textiles, known as Kalamkari." },
  { id: 4, title: "Dhokra", image: "/src/assets/dhokra.jpg", description: "Ancient Dhokra art, a form of metal casting with intricate designs." },
  { id: 4, title: "Stone Carvings", image: "src/assets/thumnail.jpg",description: "Stone carved into beautiful figures"  },
  { id: 5, title: "Swords", image: "src/assets/swordthumbnail.jpg",description:"Swords" }
];

export default function BestSellerPage() {
  return (
    <div className="p-6 pl-6  min-h-screen mr-20 ml-40">
      {/* Tutorials Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-100 animate-fade-in text-center w-full">
          Tutorials
        </h1>
        <Link
          to="/tutorials"
          className="text-blue-400 hover:underline text-sm flex items-center whitespace-nowrap"
        >
          View More <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>
      <div className='relative z-10' > <VideoGallery  /></div>
     

      {/* Models Section */}
      <h2 className="text-3xl font-semibold text-gray-100 animate-fade-in text-center w-full mt-12 mb-6">
        Models
      </h2>

      {/* Swiper Slider for Models */}
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        className="w-3/4"
      >
        {models.map((model) => (
          <SwiperSlide key={model.id} className="flex items-center bg-black p-6 rounded-lg shadow-lg">
            {/* Image Section */}
            <div className="w-1/2">
              <img
                src={model.image}
                alt={model.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            {/* Description Section */}
            <div className="w-1/2 px-8">
              <h3 className="text-2xl font-bold text-white mb-4">{model.title}</h3>
              <p className="text-gray-300 text-lg mb-4">{model.description}</p>
              <Link
                to={`/productinfo/${model.id}`}
                className="mt-4 px-4 py-2 bg-purple-600 rounded text-white hover:bg-purple-700 inline-block"
              >
                Read more
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
