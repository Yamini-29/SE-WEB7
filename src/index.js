// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './index.css'; // Import your CSS, if any
import DhokraSimulator from './Simulators/Dhokra/dhokraSimulator';

ReactDOM.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      
      <DhokraSimulator/>
    </DndProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
