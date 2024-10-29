// src/App.tsx
import React, { useState, useEffect } from 'react';
import { Code, Cpu, Globe, Menu, X, Music, Hexagon, Facebook, Twitter, Instagram } from 'lucide-react'; // Removed LinkedIn
import Loading from './Loading'; // Import the Loading component
import BinaryBackground from './BinaryBackground'; // Import BinaryBackground

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Simulate loading time
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (loading) {
    return <Loading />; // Show loading component while loading
  }

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
                <Music size={64} class Nam ename="text-neon-blue animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-neon-blue">Ledi AI</h3>
              <p className="text-lg mb-4">
                Ledi AI is our cutting-edge music generator and distributor software. It leverages advanced AI algorithms to create unique, high-quality music tracks.
              </p>
              <a
                href="#contact"
                className="bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 animate-pulse"
              >
                Learn More
              </a>
            </div>
          </section>

          <section id="services" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center animate-text-glow">Our Services</h2>
            <div className="bg-space-gray p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300 shadow-neon">
              <div className="flex items-center justify-center mb-6">
                <Cpu size={64} className="text-neon-blue animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-neon-blue">Custom Software Development</h3>
              <p className="text-lg mb-4">
                Our team of expert software developers can create custom solutions tailored to your business needs.
              </p>
              <a
                href="#contact"
                className="bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 animate-pulse"
              >
                Learn More
              </a>
            </div>
          </section>

          <section id="about" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center animate-text-glow">About Us</h2>
            <div className="bg-space-gray p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300 shadow-neon">
              <div className="flex items-center justify-center mb-6">
                <Globe size={64} className="text-neon-blue animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-neon-blue">Our Mission</h3>
              <p className="text-lg mb-4">
                At Katoshi Labs, we strive to create innovative software solutions that make a positive impact on people's lives.
              </p>
              <a
                href="#contact"
                className="bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 animate-pulse"
              >
                Learn More
              </a>
            </div>
          </section>

          <section id="contact" className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center animate-text-glow">Get in Touch</h2>
            <div className="bg-space-gray p-8 rounded-lg hover:transform hover:scale-105 transition-transform duration-300 shadow-neon">
              <div className="flex items-center justify-center mb-6">
                <Code size={64} className="text-neon-blue animate-spin-slow" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center text-neon-blue">Contact Information</h3>
              <p className="text-lg mb-4">
                Want to learn more about our products or services? Have a question or comment? We'd love to hear from you!
              </p>
              <ul className="flex justify-center mb-4">
                <li className="mr-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook size={24} className="text-gray-300 hover:text-white transition-colors duration-300" />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter size={24} className="text-gray-300 hover:text-white transition-colors duration-300" />
                  </a>
                </li>
                <li className="mr-4">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram size={24} className="text-gray-300 hover:text-white transition-colors duration-300" />
                  </a>
                </li>
              </ul>
              <a
                href="mailto:katoshilabs@gmail.com"
                className="bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 animate-pulse"
              >
                Contact Us
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
