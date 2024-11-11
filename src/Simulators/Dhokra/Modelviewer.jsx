import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { useDrop } from 'react-dnd';

const Model = ({ path, position }) => {
  const gltf = useGLTF(path);
  return <primitive object={gltf.scene} scale={1} position={position} />;
};

const ModelViewer = () => {
  const [items, setItems] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => {
      setItems((prevItems) => [
        ...prevItems,
        { id: item.id, name: item.name, position: [0, 1, 0] },
      ]);
    },
  }));

  return (
    <div ref={drop} className="flex-1 h-full bg-gray-800 p-4">
      <Canvas camera={{ position: [0, 1, 5] }}>
        <Suspense fallback={<div>Loading Model...</div>}>
          {/* Bowl model */}
          <Model path="/models/bowl.glb" position={[0, 0, 0]} />

          {/* Draggable items */}
          {items.map((item, index) => (
            <Model key={index} path={`/models/${item.id}.glb`} position={item.position} />
          ))}

          <OrbitControls enableZoom={true} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
