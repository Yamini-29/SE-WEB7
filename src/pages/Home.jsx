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
  return (
    <div className="homepage flex flex-col min-h-screen">
      {/* Sidebar */}
      <div className="w-64">
        <SidebarWithBurgerMenu />
      </div>

      {/* Spline animation */}
      <div className="spline-container flex-1 flex ml-80 py-20 justify-center items-center relative">
        <div> {/* This div will hold the spline viewer */}
          <spline-viewer 
            url="https://prod.spline.design/9lr5Y63JHDn85s1D/scene.splinecode"
            
          ></spline-viewer>
        </div>
      </div>
      {/* BestSeller component mounted below the Spline animations */}
      <div className=" p-6 ">
        <BestSellerPage />
      </div>
    </div>
  );
}
