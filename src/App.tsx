import React, { useState, useEffect } from 'react';
import { Code, Cpu, Globe, Menu, X, Music, Hexagon } from 'lucide-react';

const BinaryBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('binary-canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = '10';
    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, []);

  return <canvas id="binary-canvas" className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-white hover:text-neon-blue transition-colors duration-300">
    {children}
  </a>
);

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <Hexagon size={32} className="text-white animate-pulse" />
    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
      Katoshi Labs
    </span>
  </div>
);

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-deep-space text-white font-sans">
      <BinaryBackground />
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <Logo />
            <div className="hidden md:flex space-x-6">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
          {isMenuOpen && (
            <div className="md:hidden mt-4 space-y-4 space-x-3.5">
              <NavLink href="#home">Home</NavLink>
              <NavLink href="#products">Products</NavLink>
              <NavLink href="#services">Services</NavLink>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          )}
        </header>

        <main className="container mx-auto px-4 py-12">
          <section id="home" className="text-center mb-20">
            <h1 className="text-5xl font-bold mb-6 animate-text-glow">
              Innovating the Future of Software
            </h1>
            <p className="text-xl mb-8 text-neon-blue">
              Katoshi Labs: Where cutting-edge technology meets elegant solutions.
            </p>
            <a
              href="#contact"
              className="bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 animate-pulse"
            >
              Get Started
            </a>
          </section>

          <section id="products" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center animate-text-glow">Our Products</h2>
            <div className="bg-space-gray p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300 shadow-neon">
              <div className="flex items-center justify-center mb-6">
                <Music size={64} className="text-neon-blue animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-neon-blue">Ledi AI</h3>
              <p className="text-lg mb-4">
                Ledi AI is our cutting-edge music generator and distributor software. It leverages advanced AI algorithms to create unique, high-quality music tracks and streamlines the distribution process for artists and labels.
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-6">
                <li>AI-powered music composition</li>
                <li>Customizable genre and style options</li>
                <li>Seamless integration with major music platforms</li>
                <li>Automated royalty tracking and distribution</li>
              </ul>
              <div className="text-center">
                <a
                  href="#contact"
                  className="bg-neon-blue text-deep-space px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </section>

          <section id="services" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center animate-text-glow">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Code size={48} />, title: 'Custom Software Development' },
                { icon: <Cpu size={48} />, title: 'AI & Machine Learning' },
                { icon: <Globe size={48} />, title: 'Web & Mobile Applications' },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-space-gray p-6 rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300 shadow-neon"
                >
                  <div className="text-neon-blue mb-4 flex justify-center animate-float">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400">
                    Leveraging cutting-edge technologies to deliver innovative solutions.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="about" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center animate-text-glow">About Katoshi Labs</h2>
            <div className="bg-space-gray p-8 rounded-lg shadow-neon">
              <p className="text-lg mb-4">
                Katoshi Labs is at the forefront of software innovation, combining expertise in
                blockchain, AI, and cloud technologies to create transformative solutions for
                businesses worldwide.
              </p>
              <p className="text-lg">
                Our team of passionate developers, designers, and strategists work tirelessly to
                turn visionary ideas into reality, driving the future of technology forward.
              </p>
            </div>
          </section>

          <section id="contact" className="text-center">
            <h2 className="text-3xl font-bold mb-8 animate-text-glow">Get in Touch</h2>
            <p className="text-xl mb-8 text-neon-blue">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
            <a
              href="mailto:contact@katoshilabs.com"
              className="bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 animate-pulse"
            >
              Contact Us
            </a>
          </section>
        </main>

        <footer className="bg-space-gray py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Katoshi Labs. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
