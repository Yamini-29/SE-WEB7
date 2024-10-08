import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; 

const Thattu3DView = ({ borderTexture }) => {
  useEffect(() => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const texture = new THREE.TextureLoader().load(borderTexture);
    const geometry = new THREE.CircleGeometry(5, 64);
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      side: THREE.DoubleSide, 
    });
    const circle = new THREE.Mesh(geometry, material);

    scene.add(circle);
    camera.position.z = 10;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.dampingFactor = 0.05;
    controls.enableZoom = true; 
    controls.enablePan = false; 

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, [borderTexture]);

  return null; 
};

export default Thattu3DView;
