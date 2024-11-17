import React, { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLocation, useNavigate } from 'react-router-dom';

const Simulator = () => {
    const location = useLocation();
    const navigate = useNavigate();
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

    // Function to handle the "End Simulation" button click
    const handleEndSimulation = () => {
        // Close the current tab (works only if opened via window.open)
        window.close();

        // Navigate back to the previous page
        navigate(-1); // This will take the user back to the previous page in history
    };

    return (
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            {/* End Simulation Button */}
            <button
                onClick={handleEndSimulation}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    zIndex: 10,
                }}
            >
                End Simulation
            </button>

            <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
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
