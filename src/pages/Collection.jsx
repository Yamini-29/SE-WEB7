import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation

const pages = [
  {
    title: "Kalamkari",
    thumbnail: "/src/assets/kalamkari_tut.jpg",
    link: "/kalam1", // Page already created
  },
  {
    title: "Thanjavur Thattu",
    thumbnail: "/src/assets/tj_thattu.jpeg",
    link: "/thattu", // Page already created
  },
  {
    title: "Tarkashi",
    thumbnail: "/src/assets/tarkashi.jpg",
    link: "/simulation", // Page already created
  },
  {
    title: "Stone Carving",
    thumbnail: "/src/assets/stoness.jpg",
    link: "/stone", // Page already created
  },
  {
    title: "Dhokra",
    thumbnail: "/src/assets/dhokra_info_2.jpg",
    link: "/dhokra", // Page already created
  },
  {
    title: "Swords",
    thumbnail: "/src/assets/swordss.jpg",
    link: "/indiswords", // Page already created
  },
  {
    title: "Thanjavur Thalayaati Bommai",
    thumbnail: "/src/assets/thala.avif",
    link: "/3d-view", // Page already created
  },
];

const Collection = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center text-gray-100 mb-8">Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page, index) => (
          <div
            key={index}
            className="cursor-pointer transform transition duration-300 hover:scale-105"
            onClick={() => navigate(page.link)} // Navigate to the corresponding page
          >
            <img
              src={page.thumbnail}
              alt={page.title}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-gray-300 text-center">{page.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
