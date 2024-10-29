
import React from 'react';

const TermsOfUse: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center animate-text-glow">Terms of Use</h2>
      <div className="bg-space-gray p-8 rounded-lg shadow-neon">
        <p className="text-lg mb-4">
          Please read these terms of use carefully before using our website or services.
        </p>
        <p className="text-lg">
          By accessing or using our website or services, you agree to be bound by these
          terms of use. If you do not agree to these terms of use, please do not use our
          website or services.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
