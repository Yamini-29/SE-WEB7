import React from "react";
import { useNavigate } from "react-router-dom";

const ModelSelection = () => {
  const navigate = useNavigate();

  const models = [
    {
      id: 1,
      name: "Model 1",
      image: "src/assets/model1.jpg", // Replace with your image path
      route: "/model1",
    },
    {
      id: 2,
      name: "Model 2",
      image: "src/assets/model2.webp", // Replace with your image path
      route: "/model2",
    },
    {
      id: 3,
      name: "Model 3",
      image: "src/assets/model3.jpg", // Replace with your image path
      route: "/model3",
    },
  ];

  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">
        Select a Dhokra 3D Model
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {models.map((model) => (
          <div
            key={model.id}
            className="bg-gray-800 hover:bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => navigate(model.route)}
          >
            <img
              src={model.image}
              alt={model.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{model.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelSelection;
