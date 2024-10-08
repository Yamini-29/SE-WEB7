import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './Canvas';
import BorderSelector from './BorderSelector';
import './App2.css';
import MainRouter from './Routes.jsx';

function App2() {
  const [selectedBorder, setSelectedBorder] = useState(null);
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <BorderSelector onSelectBorder={setSelectedBorder} />
        <Canvas selectedBorder={selectedBorder} />
      </div>
    </DndProvider>
  );
}

export default App2;