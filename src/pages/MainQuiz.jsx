import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MainQuiz() {
  // Optional: You can animate the background or other elements using useEffect
  useEffect(() => {
    // Any effect or animation you want to run when the page loads
  }, []);

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
          className="flex space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link
            to="/quiz"
            state={{ model: "Kalamkari" }}
            className="bg-blue-600 text-white py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transform transition duration-300 text-2xl"
          >
            Kalamkari
          </Link>
          <Link
            to="/quiz"
            state={{ model: "Tarkashi" }}
            className="bg-blue-600 text-white py-4 px-10 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transform transition duration-300 text-2xl"
          >
            Tarkashi
          </Link>
        </motion.div>
      </div>
    </div>
  );
}