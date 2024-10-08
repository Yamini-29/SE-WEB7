import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Import OrbitControls

const Thattu3DView = ({ borderTexture }) => {
  useEffect(() => {
    // Set up scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load texture for the border
    const texture = new THREE.TextureLoader().load(borderTexture);
    const geometry = new THREE.CircleGeometry(5, 64);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide, // This makes the texture appear on both front and back
    });
    const circle = new THREE.Mesh(geometry, material);

    // Add the circle to the scene
    scene.add(circle);
    camera.position.z = 10;

    // Add OrbitControls for drag and zoom functionality
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Enable smooth damping (optional)
    controls.dampingFactor = 0.05; // Controls the damping (inertia) of the rotation (optional)
    controls.enableZoom = true; // Enable zoom functionality
    controls.enablePan = false; // Disable panning if you don't want it

    // Animation loop (without rotation)
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Update the controls on each frame
      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, [borderTexture]);

  return null; // This component doesn't render anything directly, just attaches the canvas
};

export default Thattu3DView;