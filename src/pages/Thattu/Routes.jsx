import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App2 from './App2';
import Thattu3DView from './Thattu3DView';

const MainRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Main App2 */}
        <Route path="/" element={<App2 />} />
        
        {/* 3D View Route */}
        <Route path="/3d-view" element={<Thattu3DPage />} />
      </Routes>
    </Router>
  );
};


// This page will render the 3D view when the user opens the 3d-view route
const Thattu3DPage = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const borderTexture = queryParams.get('borderTexture');
  return <Thattu3DView borderTexture={borderTexture} />;
};

export default MainRouter;