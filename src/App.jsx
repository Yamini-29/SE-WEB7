import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home'; // Your home page component
import BestSeller from './components/BestSeller'; // BestSeller component
import Quiz from './pages/Quiz'; // Quiz component
import MainQuiz from './pages/MainQuiz'; // Main quiz component
import KalamkariSimulations from './Simulators/kalamkari/KalamkariSimulations'
import KalamkariSimulator from './Simulators/kalamkari/KalamkariSimulator'
import Designs from './Simulators/kalamkari/Designs'
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<HomePage />} />

        {/* Other Pages */}
        <Route path='/border' element={<Designs />} />
        <Route path='/3dsim' element={<KalamkariSimulator />} />
        <Route path='/simulation' element={<KalamkariSimulations />} />

        {/* Quiz Page */}
        <Route path='/quiz' element={<Quiz />} />

        {/* Main Quiz Page (if it's separate from Quiz) */}
        <Route path='/mainquiz' element={<MainQuiz />} />

        {/* BestSeller Page */}
        <Route path='/bestseller' element={<BestSeller />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;