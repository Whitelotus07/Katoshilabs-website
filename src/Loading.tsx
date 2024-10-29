
import React from 'react';
import { Hexagon } from 'lucide-react';

const Loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-deep-space">
      <Hexagon size={64} className="text-white animate-spin" />
      <h1 className="text-2xl font-bold text-white mt-4">Loading Katoshi Labs...</h1>
    </div>
  );
};

export default Loading;
