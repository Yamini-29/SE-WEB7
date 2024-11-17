import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Canvas from './Canvas';
import BorderSelector from './BorderSelector';
import './App2.css';

function App2() {
  const [selectedBorder, setSelectedBorder] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null); // Track selected design

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <BorderSelector 
          onSelectBorder={setSelectedBorder} 
          onSelectDesign={setSelectedDesign} // Pass the setter for design selection
        />
        <Canvas 
          selectedBorder={selectedBorder} 
          selectedDesign={selectedDesign} // Pass the selected design to Canvas
        />
      </div>
    </DndProvider>
  );
}

export default App2;
