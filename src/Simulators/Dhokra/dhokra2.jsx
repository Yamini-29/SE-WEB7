// ModelViewer.js
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

const Model = ({ path }) => {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} scale={1} />;
};

const ModelViewer = () => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/dhokraSimulation'); // Redirect to the CreatePage
  };

  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-orange-500 mb-8">3D Model Viewer</h1>

      {/* HTML wrapper for the 3D Canvas */}
      <div className="w-full max-w-2xl h-[500px] bg-gray-800 rounded-lg shadow-lg p-4 relative">
        <Canvas camera={{ position: [0, 1, 5] }}>
          <Suspense fallback={null}>
            <Model path="/models/dhokra2.glb" />
            <OrbitControls enableZoom={true} />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>

      <p className="text-gray-300 mt-4">
        Use your mouse to rotate, pan, and zoom in on the model.
      </p>

      {/* Create Your Own button */}
      <button
        onClick={handleCreateClick}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 mt-6 rounded shadow-md"
      >
        Create Your Own
      </button>
    </div>
  );
};

export default ModelViewer;
