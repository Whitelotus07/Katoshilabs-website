
import React from 'react';
import './Loading.css'; // Ensure to import the CSS file

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="hexagon">
        <div className="hexagon-inner"></div>
      </div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loading;
