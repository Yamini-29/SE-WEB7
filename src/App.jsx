import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home'; // Your home page component
import BestSeller from './components/BestSeller'; // BestSeller component
import Quiz from './pages/Quiz'; // Quiz component
import Collection from './pages/Collection';
import MainQuiz from './pages/MainQuiz'; // Main quiz component
import Simulations from './Simulators/Tarkashi/Simulations'; // Simulations page
import Border from './Simulators/Tarkashi/Border'; // Border component/page
import Simulator from './Simulators/Tarkashi/Simulator'; // 3D simulator page
import Chatroom from './pages/Chatroom';
import ProductInfo from './pages/ProductInfo';
import App2 from './Simulators/Thattu/App2';
import NewsFooter from './pages/NewsFooter';
import Thattu3DView from './Simulators/Thattu/Thattu3DView';
import KalamkariSimulations from './Simulators/kalamkari/KalamkariSimulations';
import Designs from './Simulators/kalamkari/Designs';
import Tutorials from './pages/Tutorials';
import KalamkariSimulator from './Simulators/kalamkari/KalamkariSimulator';
import DhokraSimulator from './Simulators/Dhokra/dhokra';
import { SidebarWithBurgerMenu } from './components/Sidebar';
import PreLoader from './components/PreLoader';
import Leaderboard from './pages/leaderboard';
import DhokraSim from './Simulators/Dhokra/dhokraSimulator';
import Stone from './pages/Stone';
import Indiswords from './pages/Indiswords';
import Contest from './pages/Contest';

const App = () => {
  

  return (
    <div>
      <SidebarWithBurgerMenu />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />

        {/* Other Pages */}
        <Route path="/border" element={<Border />} />
        <Route path="/3dsim" element={<Simulator />} />
        <Route path="/simulation" element={<Simulations />} />

        {/* Quiz Page */}
        <Route path="/quiz" element={<Quiz />} />
        {/* Contest Page */}
        <Route path="/contest" element={<Contest />} />
        {/* Main Quiz Page (if it's separate from Quiz) */}
        <Route path="/mainquiz" element={<MainQuiz />} />

        {/* BestSeller Page */}
        <Route path="/bestseller" element={<BestSeller />} />

        {/* Tutorials Page */}
        <Route path="/tutorials" element={<Tutorials />} />
        {/* Community Page */}
        <Route path="/community" element={<Chatroom />} />
        {/* Different product page */}
        <Route path="/productinfo/:productIndex" element={<ProductInfo />} />
        {/* App2.jsx for thattu */}
        <Route path="/thattu" element={<App2 />} />
        {/* Route for 3D sim thattu */}
        <Route path="/3d-view" element={<Thattu3DPage />} />
        <Route path="/collection" element={<Collection />} />
        {/* Kalamkari first page */}
        <Route path="/kalam1" element={<KalamkariSimulations />} />
        <Route path="/dhokra" element={<DhokraSimulator />} />
        {/* designs */}
        <Route path="/designs" element={<Designs />} />
        {/* For kalamkari final */}
        <Route path="/kalamsim" element={<KalamkariSimulator />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/dhokraSimulation" element={<DhokraSim />} />
        <Route path="/stone" element={<Stone />} />
        <Route path="/indiswords" element={<Indiswords />} />
      </Routes>
    </div>
  );
};

const Thattu3DPage = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const borderTexture = queryParams.get('borderTexture');
  return <Thattu3DView borderTexture={borderTexture} />;
};

export default App;
