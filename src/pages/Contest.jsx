// Contest.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// Placeholder data for contests
const contests = [
  { id: 1, name: "Kalamkari", description: "Dive into the world of Kalamkari art and compete in exciting challenges." },
  { id: 2, name: "Tarkashi", description: "Show your craftsmanship in Tarkashi with our interactive contest." },
  { id: 3, name: "Thanjavur Thattu", description: "Unleash your creativity in the Thanjavur Thattu art competition." },
];

const Contest = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContests, setFilteredContests] = useState(contests);
  const navigate = useNavigate();

  // Handle search functionality
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    // Filter contests based on search term
    const filtered = contests.filter((contest) =>
      contest.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredContests(filtered);
  };

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen p-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
        {/* Text Section */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl font-bold mb-4">Contests</h1>
          <p className="text-lg  mb-6">
            Participate in our interactive traditional art contests and showcase your skills.
          </p>
          <p>
            Choose from a variety of competitions, learn new techniques, and compete with fellow art enthusiasts.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3 flex justify-center">
          <img
            src="https://blog.tubikstudio.com/wp-content/uploads/2018/11/graphic-design-illustration-in-UI-design-article.jpg"
            alt="Contest Illustration"
            className="w-1/3 lg:w-3/4 max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex items-center justify-center mb-10">
        <div className="relative w-1/2 sm:w-1/3">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute -left-8  top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search contests"
            value={searchTerm}
            onChange={handleSearch}
            className="bg-gray-800 text-gray-200 pl-10 pr-4 py-2 rounded-l-lg w-full focus:outline-none"
          />
        </div>
        <button className="bg-yellow-600 text-gray-900 px-4 py-2 rounded-r-lg hover:bg-yellow-500">
          Search
        </button>
      </div>

      {/* Contest Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {filteredContests.map((contest) => (
          <div
            key={contest.id}
            className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transform transition duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold mb-2">{contest.name}</h2>
            <p className="mb-4">{contest.description}</p>
            <button 
                onClick={() => navigate(`/productinfo/${contest.id}`)}
                className="bg-yellow-600 text-gray-900 px-4 py-2 rounded hover:bg-yellow-500">
              Enter Contest
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contest;



