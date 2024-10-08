import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLocation } from 'react-router-dom';


const Simulator = () => {
    const location = useLocation();
    const { backgroundImage, combinedImage } = location.state || {};

    const [backgroundTexture, setBackgroundTexture] = useState(null);
    const [combinedTexture, setCombinedTexture] = useState(null);
    const controlsRef = useRef();

    useEffect(() => {
        // Check what images are passed
        console.log("Background Image:", backgroundImage);
        console.log("Combined Image:", combinedImage);

        if (backgroundImage) {
            new TextureLoader().load(backgroundImage, (tex) => {
                setBackgroundTexture(tex);
            });
        } else {
            console.warn("No background image provided.");
        }

        if (combinedImage) {
            new TextureLoader().load(combinedImage, (tex) => {
                setCombinedTexture(tex);
            });
        } else {
            console.warn("No combined image provided.");
        }
    }, [backgroundImage, combinedImage]);

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Canvas>
                <ambientLight intensity={3} />
                <pointLight position={[10, 10, 10]} />
                <OrbitControls ref={controlsRef} />

                <Box args={[3, 4, 5]} position={[0, 0, 0]}>
                    <meshStandardMaterial attachArray="material" map={combinedTexture} /> 

                </Box>
            </Canvas>
        </div>
    );
};

export default Simulator;
