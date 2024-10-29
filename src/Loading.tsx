
import React from 'react';
import './Loading.css'; // Optional: for styling

const Loading: React.FC = () => {
  return (
    <div className="loader-container">
      <svg className="loader" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="#0f0" strokeWidth="5" fill="none" />
      </svg>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
