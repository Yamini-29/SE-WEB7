import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Thattu3DView = () => {
  useEffect(() => {
    // Parse query parameters
    const params = new URLSearchParams(window.location.search);
    const borderTextureUrl = params.get('borderTexture');
    const designTextureUrl = params.get('designTexture');

    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Add brighter ambient light for overall brightness
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // Intensity increased
    scene.add(ambientLight);

    // Add directional light for highlights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2); // Brighter directional light
    directionalLight.position.set(10, 10, 10).normalize();
    scene.add(directionalLight);

    // Load textures
    const loader = new THREE.TextureLoader();
    const borderTexture = loader.load(borderTextureUrl);
    const designTexture = loader.load(designTextureUrl);

    // Environment map (optional, for reflections and realism)
    const environmentTexture = loader.load('src/assets/environment.jpg'); // Replace with an actual HDR/texture
    scene.environment = environmentTexture; // Apply environment map

    // Create 3D border
    const borderGeometry = new THREE.CircleGeometry(5, 64);
    const borderMaterial = new THREE.MeshStandardMaterial({
      map: borderTexture,
      side: THREE.DoubleSide, // Applies the texture to both front and back
      roughness: 0.5, // Reduced roughness for shinier effect
      metalness: 0.7, // More metallic for brightness
    });
    const borderMesh = new THREE.Mesh(borderGeometry, borderMaterial);
    scene.add(borderMesh);

    // Create 3D design overlay
    const designGeometry = new THREE.CircleGeometry(4.5, 64); // Slightly smaller than the border
    const designMaterial = new THREE.MeshStandardMaterial({
      map: designTexture,
      side: THREE.DoubleSide, // Same design on the back
      roughness: 0.4, // Adjusted for shinier look
      metalness: 0.8, // Higher metalness for brightness
    });
    const designMesh = new THREE.Mesh(designGeometry, designMaterial);
    designMesh.position.z = 0.1; // Slightly in front of the border
    scene.add(designMesh);

    // Add OrbitControls for interaction
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default Thattu3DView;
