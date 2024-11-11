import React, { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';
import model1Image from '../../assets/Thanjavur1.png';
import model2Image from '../../assets/Thanjavur2.png';
import { SidebarWithBurgerMenu } from '../../components/Sidebar';

const ThanjavurBomma = () => {
  const [selectedImage, setSelectedImage] = useState(model1Image);
  const [rotation, setRotation] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const wobbleRef = useRef(false);
  const oscillationRef = useRef(0);
  const wobbleIntervalRef = useRef(null);

  const imageSpring = useSpring({
    transform: `rotate(${rotation}deg)`,
    config: { tension: 50, friction: 5 },
  });

  const handleModelChange = (image) => {
    setSelectedImage(image);
    setSliderValue(0);
    setRotation(0);
  };

  const triggerWobble = (magnitude) => {
    let currentMagnitude = magnitude;
    let wobbleCount = 0;

    if (wobbleIntervalRef.current) {
      clearInterval(wobbleIntervalRef.current);
    }

    const wobbleInterval = setInterval(() => {
      if (Math.abs(currentMagnitude) > 1) {
        setRotation((prevRotation) => prevRotation + currentMagnitude);
        setSliderValue((prevSliderValue) => prevSliderValue + currentMagnitude);
        currentMagnitude *= 0.9;
        wobbleCount++;
      } else {
        clearInterval(wobbleInterval);
        setRotation(0);
        setSliderValue(0);
      }
    }, 50);

    wobbleIntervalRef.current = wobbleInterval;
  };

  const handleSliderChange = (e) => {
    const newValue = e.target.value;
    setSliderValue(newValue);
    setRotation(newValue);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const wobbleMagnitude = rotation - sliderValue;
    triggerWobble(wobbleMagnitude);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <SidebarWithBurgerMenu />
      <div className="pt-4 w-full md:w-1/4 p-4 bg-gray-800 text-white flex flex-col items-center overflow-y-auto max-h-screen">
        <h2 className="text-xl mb-4 pb-4">Select Model</h2>
        <img
          src={model1Image}
          alt="Model 1"
          className="w-1/2 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => handleModelChange(model1Image)}
        />
        <img
          src={model2Image}
          alt="Model 2"
          className="w-1/2 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={() => handleModelChange(model2Image)}
        />
      </div>
      <div className="flex-1 p-4 bg-gray-700 flex flex-col items-center justify-center">
        <input
          type="range"
          min="-90"
          max="90"
          value={sliderValue}
          onChange={handleSliderChange}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="w-2/3 md:w-3/4 lg:w-1/2 mb-4 cursor-pointer"
          style={{
            appearance: 'none',
            background: '#ddd',
            height: '8px',
            borderRadius: '5px',
            outline: 'none',
          }}
        />
        <animated.div
          style={{
            width: '150px',
            height: '300px',
            backgroundImage: `url(${selectedImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            transformOrigin: 'center bottom',
            ...imageSpring,
          }}
        />
      </div>
    </div>
  );
};

export default ThanjavurBomma;
