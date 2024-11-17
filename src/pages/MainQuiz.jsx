import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MainQuiz() {
  // useEffect lets us animate the background or other elements
  useEffect(() => {
    // Any effect or animation which needs to be run when the page loads
  }, []);

  // Prevent context menu from appearing
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="bg-indigo-700 opacity-30 w-[500px] h-[500px] rounded-full filter blur-3xl absolute -top-20 -left-28"></div>
        <div className="bg-purple-600 opacity-30 w-[500px] h-[500px] rounded-full filter blur-3xl absolute bottom-16 right-28"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center p-10">
        {/* Animate the heading */}
        <motion.h1
          className="text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          Select a Model to Quiz
        </motion.h1>

        {/* Button Links */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            to="/quiz"
            state={{ model: "Kalamkari" }}
            onContextMenu={handleContextMenu}
            className="bg-blue-600 text-white py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transform transition duration-300 text-xl font-medium font-poppins"
          >
            Kalamkari
          </Link>
          <Link
            to="/quiz"
            state={{ model: "Tarkashi" }}
            onContextMenu={handleContextMenu}
            className="bg-blue-600 text-white py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transform transition duration-300 text-xl font-medium font-poppins"
          >
            Tarkashi
          </Link>
          <Link
            to="/quiz"
            state={{ model: "ThanjavurThattu" }}
            onContextMenu={handleContextMenu}
            className="bg-blue-600 text-white py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transform transition duration-300 text-xl font-medium font-poppins text-center"
          >
            Thanjavur Thattu
          </Link>
          <Link
            to="/quiz"
            state={{ model: "Dhokra" }}
            onContextMenu={handleContextMenu}
            className="bg-blue-600 text-white py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transform transition duration-300 text-xl font-medium font-poppins"
          >
            Dhokra
          </Link>
          <Link
            to="/quiz"
            state={{ model: "ThanjavurBommai" }}
            onContextMenu={handleContextMenu}
            className="bg-blue-600 text-white py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transform transition duration-300 text-xl font-medium font-poppins text-center"
          >
            Thanjavur Bommai
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
