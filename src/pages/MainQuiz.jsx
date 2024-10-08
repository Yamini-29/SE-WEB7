import React from 'react';
import { Link } from 'react-router-dom';

export default function MainQuizPage() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-gray-100 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Select a Model to Quiz</h1>
      <div className="flex space-x-4">
        <Link
          to={{ pathname: "/quiz", state: { model: "model1" } }}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
        >
          Model 1
        </Link>
        <Link
          to={{ pathname: "/quiz", state: { model: "model2" } }}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
        >
          Model 2
        </Link>
      </div>
    </div>
  );
}
 