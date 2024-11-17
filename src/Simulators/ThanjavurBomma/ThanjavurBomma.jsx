import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import model1Image from '../../assets/Thanjavur1.png';
import model2Image from '../../assets/Thanjavur2.png';
import { SidebarWithBurgerMenu } from '../../components/Sidebar';

const ThanjavurBomma = () => {
  const [selectedImage, setSelectedImage] = useState(model1Image);
  const [rotation, setRotation] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showText, setShowText] = useState(false);
  const [fadeIn, setFadeIn] = useState(true); // State for fade-in/fade-out of images
  const [isLoaded, setIsLoaded] = useState(false); // To manage the blur transition

  const wobbleRef = useRef(false);
  const wobbleIntervalRef = useRef(null);
  const textTimeoutRef = useRef(null); // Timeout reference for text disappearance

  // Spring animations
  const imageSpring = useSpring({
    transform: `rotate(${rotation}deg)`,
    config: { tension: 50, friction: 5 },
  });

  const fadeSpring = useSpring({
    opacity: fadeIn ? 1 : 0, // Fade-in and fade-out effect
    config: { duration: 500 }, // Duration of the fade effect
  });

  const textSpring = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? 'translateY(0)' : 'translateY(20px)',
    config: showText
      ? { tension: 150, friction: 20 } // Ease-in effect for appearing
      : { tension: 150, friction: 20, precision: 0.01 }, // Ease-out for disappearing
  });

  // UseEffect to handle the loading and blur transition
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoaded(true); // Set isLoaded to true after 1 second to stop blur effect
    }, 1000);

    return () => clearTimeout(loadingTimeout); // Clean up timeout on component unmount
  }, []);

  const handleModelChange = (image) => {
    setFadeIn(false); // Start fading out
    setTimeout(() => {
      setSelectedImage(image);
      setFadeIn(true); // Fade in the new image after the old one fades out
    }, 500); // Wait for the fade-out duration
    setSliderValue(0);
    setRotation(0);
    setShowText(false); // Hide text when switching models
    if (textTimeoutRef.current) {
      clearTimeout(textTimeoutRef.current); // Clear timeout if model is changed
    }
  };

  const triggerWobble = (magnitude) => {
    let currentMagnitude = magnitude;

    if (wobbleIntervalRef.current) {
      clearInterval(wobbleIntervalRef.current);
    }

    const wobbleInterval = setInterval(() => {
      if (Math.abs(currentMagnitude) > 1) {
        setRotation((prevRotation) => prevRotation + currentMagnitude);
        setSliderValue((prevSliderValue) => prevSliderValue + currentMagnitude);
        currentMagnitude *= 0.9;
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
    setShowText(true);
    // Clear existing timeout
    if (textTimeoutRef.current) {
      clearTimeout(textTimeoutRef.current);
    }

    // Show for 10 seconds before disappearing
    textTimeoutRef.current = setTimeout(() => {
      setShowText(false);
    }, 10000);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    const wobbleMagnitude = rotation - sliderValue;
    triggerWobble(wobbleMagnitude);
  };

  // Function to close the text manually
  const closeText = () => {
    setShowText(false);
    if (textTimeoutRef.current) {
      clearTimeout(textTimeoutRef.current); // Clear the auto-close timeout if the user closes the text
    }
  };

  // Spring animation for the blur effect
  const blurSpring = useSpring({
    opacity: isLoaded ? 0 : 0.5, // Fade from 50% to 0% after loading
    config: { duration: 1000 }, // Transition over 1 second
  });

  return (
    <div className="flex flex-col md:flex-row h-screen relative">
      {/* Blurred Overlay during loading */}
      {!isLoaded && (
        <animated.div
          className="absolute inset-0 bg-black z-50"
          style={blurSpring} // Apply fade effect to the blur
        />
      )}

      {/* Main Content */}
      <SidebarWithBurgerMenu />
      <div className="pt-4 w-full md:w-1/4 p-6 bg-gray-800 text-white flex flex-col items-center overflow-y-auto max-h-screen scrollbar-none">
        <h2 className="text-xl pt-4 mb-4">Select Model</h2>
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
        {/* Cool "Pull and Release" text */}
        <h3 className="text-2xl font-extrabold text-center text-white mb-4">
          Pull and Release
        </h3>
        
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
          className="w-[150px] h-[300px] bg-cover bg-center rounded-lg"
          style={{
            backgroundImage: `url(${selectedImage})`,
            transformOrigin: 'center bottom',
            ...imageSpring,
            ...fadeSpring, // Apply fade animation
          }}
        />
      </div>

      {/* Dialog Box with description */}
      {showText && (
        <animated.div
          className="fixed bottom-16 right-10 bg-gray-800 text-white p-4 rounded-lg shadow-lg w-[300px] max-h-[50vh] overflow-y-auto overflow-x-hidden z-50 transition-all ease-in duration-300"
          style={textSpring}
        >
          <button
            onClick={closeText}
            className="absolute top-2.5 right-5 text-white text-3xl"
            aria-label="Close"
          >
            &times; {/* "X" symbol */}
          </button>
          <h3 className="text-xl font-semibold mb-2">Thanjavur Bomma</h3>
          <p className="text-sm">
            It operates based on the principle of stability and center of mass. 
            Its rounded, weighted base creates a restoring force when it is toppled, 
            as gravity pulls the toy's center of mass back toward the vertical axis. 
            The toy's shape and mass distribution ensure that, when displaced, 
            it returns to an upright position due to this self-correcting balance, 
            similar to a "roly-poly" mechanism.
          </p>
        </animated.div>
      )}
    </div>
  );
};

export default ThanjavurBomma;
