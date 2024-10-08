import React, { useEffect } from 'react';
import { SidebarWithBurgerMenu } from '../components/Sidebar';
import BestSellerPage from '../components/BestSeller';

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@splinetool/viewer@1.9.29/build/spline-viewer.js";
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  // Function to handle button click
  const handleTryNowClick = () => {
    // You can add your desired functionality here
    alert("Try Now button clicked!"); // Example: show an alert
  };

  return (
    <div className="homepage flex flex-col min-h-screen relative"> {/* Added relative positioning */}
      {/* Sidebar */}
      <div className="w-64">
        <SidebarWithBurgerMenu />
      </div>

      {/* Top Header with Title and Button */}
      <div className="absolute top-4 left-72 flex justify-between items-center w-full px-4"> {/* Adjusted left margin based on sidebar width */}
        

      </div>
      {/* <button 
          onClick={handleTryNowClick} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 whitespace-nowrap" // Use whitespace-nowrap to prevent stretching
        >
          Try Now
        </button> */}

      {/* Spline animation */}
      <div className="spline-container flex-1 flex justify-center items-center relative">
        <spline-viewer url="https://prod.spline.design/9lr5Y63JHDn85s1D/scene.splinecode"></spline-viewer>
      </div>

      {/* BestSeller component mounted below the Spline animations */}
      <div className="p-6">
        <BestSellerPage />
      </div>
    </div>
  );
}
