import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainRouter from './Routes.jsx'; // Import the new routing file

ReactDOM.render(
  <React.StrictMode>
    <MainRouter /> {/* Use MainRouter for handling routes */}
  </React.StrictMode>,
  document.getElementById('root')
);