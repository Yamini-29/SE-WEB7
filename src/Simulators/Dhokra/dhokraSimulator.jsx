
import React from 'react';
import Sidebar from './Sidebar';
import ModelViewer from './Modelviewer';

const DhokraSimulator = () => {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar for draggable items */}
      <Sidebar />

      {/* Canvas with 3D scene */}
      <ModelViewer />
    </div>
  );
};

export default DhokraSimulator;
