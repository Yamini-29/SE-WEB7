import React from 'react';
import { useDrag } from 'react-dnd';
import './BorderSelector.css';

// Draggable Border Component
function DraggableBorder({ border }) {
  const [, drag] = useDrag(() => ({
    type: 'border', // Identifies the draggable type as 'border'
    item: { src: border.src, alt: border.alt }, // Pass border source and alt text
  }));

  return (
    <img
      ref={drag}
      src={border.src}
      alt={border.alt}
      className="border-option" // Class for styling
    />
  );
}

// Draggable Design Component
function DraggableDesign({ design }) {
  const [, drag] = useDrag(() => ({
    type: 'design', // Identifies the draggable type as 'design'
    item: { src: design.src, alt: design.alt }, // Pass design source and alt text
  }));

  return (
    <img
      ref={drag}
      src={design.src}
      alt={design.alt}
      className="design-option" // Class for styling
    />
  );
}

// Main Component to Render Borders and Designs
function BorderSelector() {
  const borders = [
    { id: 1, src: 'src/assets/border1-removebg-preview.png', alt: 'Border 1' },
    { id: 2, src: 'src/assets/border2-removebg-preview.png', alt: 'Border 2' },
    { id: 3, src: 'src/assets/border3-removebg-preview.png', alt: 'Border 3' },
  ];

  const designs = [
    { id: 1, src: 'src/assets/t1.jpg', alt: 'Design 1' },
    { id: 2, src: 'src/assets/thattu_design_02.png', alt: 'Design 2' },
  ];

  return (
    <div className="border-selector">
      {/* Border Section */}
      <h2 className="h2selector">Select Border</h2>
      <div className="border-options">
        {borders.map((border) => (
          <DraggableBorder key={border.id} border={border} />
        ))}
      </div>

      {/* Design Section */}
      <h2 className="h2selector">Select Design</h2>
      <div className="design-options">
        {designs.map((design) => (
          <DraggableDesign key={design.id} design={design} />
        ))}
      </div>
    </div>
  );
}

export default BorderSelector;
