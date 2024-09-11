import React from "react";
import './Loading.css'

interface LoadingPopupProps {
  isLoading: boolean;
}

const LoadingPopUp: React.FC<LoadingPopupProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="loading-popup-overlay">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingPopUp;
