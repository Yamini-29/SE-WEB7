import React, { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.28/build/spline-viewer.js';
    script.type = 'module';
    document.body.appendChild(script);
  }, []);

  return (
    <div className="homepage">
      {/* Other content */}

      {/* Spline animation */}
      <div className="spline-container w-full h-screen flex justify-center items-center">
        <spline-viewer url="https://prod.spline.design/VFy7QYAkmOquv6SV/scene.splinecode"></spline-viewer>
      </div>

      {/* Other content */}
    </div>
  );
}
