import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ id, name }) => {
  const [, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { id, name },
  }));

  return (
    <div
      ref={drag}
      className="bg-orange-500 text-white font-bold rounded-lg shadow-md p-2 mb-2 cursor-pointer"
    >
      {name}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-800 p-4">
      <h2 className="text-xl font-bold text-white mb-4">Items</h2>
      <DraggableItem id="beeswax" name="Beeswax" />
      {/* Add more draggable items as needed */}
    </div>
  );
};

export default Sidebar;
