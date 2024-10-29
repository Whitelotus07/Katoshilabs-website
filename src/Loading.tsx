
import React from 'react';
import { Hexagon } from 'lucide-react';
import './Loading.css'; // Ensure to import the CSS file

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="hexagon-wrapper">
        <Hexagon size={100} className="loading-hexagon Hexagon-white spin-slow" />
      </div>
      <p className="loading-text text-white animate-pulse">Katoshi Labs</p>
    </div>
  );
};

export default Loading;
