
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center animate-text-glow">Privacy Policy</h2>
      <div className="bg-space-gray p-8 rounded-lg shadow-neon">
        <p className="text-lg mb-4">
          We are committed to protecting your privacy and maintaining the confidentiality
          of your personal information.
        </p>
        <p className="text-lg">
          This privacy policy explains how we collect, use, and disclose your personal
          information when you use our website or services.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
