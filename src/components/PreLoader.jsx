import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import './preloader.css'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Cultural,</span>
        <span>Heritage,</span>
        <span>Preserve.</span>
      </div>
    </div>
  );
};

export default PreLoader;