// src/Loading.tsx
import React from 'react';
import { Hexagon } from 'lucide-react';
import { useMediaQuery } from 'react-responsive'; // Importing media query
import './Loading.css'; // Ensure to import the CSS file

const Loading: React.FC = () => {
  // Define media queries for mobile and desktop
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  // Set hexagon size and text size based on the screen size
  const hexagonSize = isMobile ? 80 : 100; // 80px for mobile, 100px for desktop
  const textSize = isMobile ? '1.5rem' : '2rem'; // 1.5rem for mobile, 2rem for desktop

  return (
    <div className="loading-container">
      <div className="hexagon-wrapper">
        <Hexagon size={hexagonSize} className="loading-hexagon spin-slow" />
      </div>
      <p className="loading-text text-white animate-pulse" style={{ fontSize: textSize }}>
        Katoshi Labs
      </p>
    </div>
  );
};

export default Loading;
