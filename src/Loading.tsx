
import React from 'react';
import { Hexagon } from 'lucide-react';
import './Loading.css'; // Ensure to import the CSS file

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="hexagon-wrapper">
        <Hexagon size={100} className="loading-hexagon animate-pulse" />
      </div>
      <p className="loading-text">Katoshi Labs</p>
    </div>
  );
};

export default Loading;
