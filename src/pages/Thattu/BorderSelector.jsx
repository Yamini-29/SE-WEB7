import React from 'react';
import { useDrag } from 'react-dnd';
import './BorderSelector.css';

function BorderSelector() {
  const borders = [
    { id: 1, src: 'src/assets/border1-removebg-preview.png', alt: 'Border 1' },
    { id: 2, src: 'src/assets/border2-removebg-preview.png', alt: 'Border 2' },
    { id: 3, src: 'src/assets/border3-removebg-preview.png', alt: 'Border 3' },
  ];

  return (
    <div className="border-selector">
      <h2 className="h2selector">Select Border</h2>
      <div className="border-options">
        {borders.map((border) => (
          <DraggableBorder key={border.id} border={border} />
        ))}
      </div>
    </div>
  );
}

function DraggableBorder({ border }) {
  const [, drag] = useDrag(() => ({
    type: 'border',
    item: { src: border.src },
  }));

  return (
    <img
      ref={drag}
      src={border.src}
      alt={border.alt}
      className="border-option"
    />
  );
}
export default BorderSelector;