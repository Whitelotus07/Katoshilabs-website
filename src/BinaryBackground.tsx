import React, { useEffect } from 'react';

const BinaryBackground: React.FC = () => {
  useEffect(() => {
    const canvas = document.getElementById('binary-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const binary = '10';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = Array(Math.floor(columns)).fill(1);

    function draw() {
      // Add semi-transparent black background to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Set the text style
      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      // Loop over each column
      for (let i = 0; i < drops.length; i++) {
        // Pick a random character from binary string
        const text = binary[Math.floor(Math.random() * binary.length)];
        
        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop to top of screen with some randomness
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas 
      id="binary-canvas" 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'var(--deep-space)' }}
    />
  );
};

export default BinaryBackground;
