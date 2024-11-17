import React, { useRef, useState } from 'react';
import { useDrop } from 'react-dnd';
import html2canvas from 'html2canvas';
import { RotateCcw } from 'lucide-react';
import './Canvas.css';

function Canvas({ selectedBorder }) {
  const canvasRef = useRef(null);
  const [borderImage, setBorderImage] = useState(selectedBorder);
  const [designImage, setDesignImage] = useState(null);
  const [designScale, setDesignScale] = useState(0.5); // Default scale for the design

  const [, drop] = useDrop(() => ({
    accept: ['border', 'design'],
    drop: (item, monitor) => {
      const itemType = monitor.getItemType();
      if (itemType === 'border') {
        setBorderImage(item.src);
      } else if (itemType === 'design') {
        setDesignImage(item.src);
      }
    },
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

  const handleReset = () => {
    setBorderImage(null);
    setDesignImage(null);
    setDesignScale(0.5); // Reset scale
  };

  const handleScaleChange = (e) => {
    setDesignScale(parseFloat(e.target.value));
  };

  const handleViewIn3D = () => {
    const borderTexture = borderImage || 'src/assets/border1-removebg-preview.png';
    const designTexture = designImage || 'src/assets/default-design.png'; // Fallback design image
    const newWindow = window.open(
      `/3d-view?borderTexture=${encodeURIComponent(borderTexture)}&designTexture=${encodeURIComponent(designTexture)}`,
      '_blank'
    );
    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <div className="canvas-container">
      <div className="canvas-header">
        <h1 className="canvas-title">Make your Thattu</h1> {/* Updated title */}
        <button onClick={handleReset} className="reset-button" title="Reset Changes">
          <RotateCcw size={18} /> {/* Adjusted icon size for better balance */}
          <span>Reset</span>
        </button>
      </div>

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
        {designImage && (
          <div
            className="design-container"
            style={{
              width: `${designScale * 100}%`, // Dynamically scale width
              height: `${designScale * 100}%`, // Dynamically scale height
            }}
          >
            <img src={designImage} alt="Selected Design" className="canvas-design" />
          </div>
        )}
      </div>

      {designImage && (
        <div className="scale-control">
          <label className="scale-label">Design Size:</label>
          <input
            type="range"
            min="0.3" // Minimum scale
            max="1"   // Maximum scale
            step="0.1"
            value={designScale}
            onChange={handleScaleChange}
            className="scale-slider"
          />
        </div>
      )}

      <div className="button-group">
        <button onClick={saveImage} className="save-button">Save Image</button>
        <button onClick={handleViewIn3D} className="view-3d-button">View in 3D</button>
      </div>
    </div>
  );
}

export default Canvas;
