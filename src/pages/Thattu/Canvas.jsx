import React, { useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import html2canvas from 'html2canvas';
import './Canvas.css';

function Canvas({ selectedBorder }) {
  const canvasRef = useRef(null);
  const [borderImage, setBorderImage] = useState(selectedBorder);

  const [, drop] = useDrop(() => ({
    accept: 'border',
    drop: (item) => setBorderImage(item.src),
  }));

  const saveImage = async () => {
    if (canvasRef.current) {
      const canvas = await html2canvas(canvasRef.current);
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'canvas-image.png';
      link.click();
    }
  };

  const handleViewIn3D = () => {
    const borderTexture = borderImage || 'src/assets/border1-removebg-preview.png'; 
    const newWindow = window.open(`/3d-view?borderTexture=${encodeURIComponent(borderTexture)}`, '_blank'); 
    if (newWindow) {
      newWindow.focus();
    }
  };
  
  return (
    <div className="canvas-container">
      <h2 className="h2">Selected Border</h2>
      <div
        ref={(node) => {
          drop(node);   
          canvasRef.current = node;  
        }}
        className="canvas"
      >
        {borderImage && (
          <img src={borderImage} alt="Selected Border" className="canvas-border" />
        )}
      </div>

      <div className="button-group">
        <button onClick={saveImage} className="save-button">Save Image</button>
        <button onClick={handleViewIn3D} className="view-3d-button">View in 3D</button>
      </div>
    </div>
  );
}

export default Canvas;
