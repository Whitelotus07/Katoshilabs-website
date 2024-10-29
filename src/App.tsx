// App.jsx
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import BinaryBackground from './BinaryBackground'; // Import your BinaryBackground component
import { Code, Cpu, Globe, Menu, X, Music, Hexagon } from 'lucide-react';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-white font-sans">
      {loading ? (
        <Loading />
      ) : (
        <>
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
                  <NavLink href="#terms">Terms of Use</NavLink>
                  <NavLink href="#privacy">Privacy Policy</NavLink>
                </div>
                <button
                  className="md:hidden text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </nav>
              {isMenuOpen && (
                <div className="md:hidden mt-4 space-y-4">
                  <NavLink href="#home">Home</NavLink>
                  <NavLink href="#products">Products</NavLink>
                  <NavLink href="#services">Services</NavLink>
                  <NavLink href="#about">About</NavLink>
                  <NavLink href="#contact">Contact</NavLink>
                  <NavLink href="#terms">Terms of Use</NavLink>
                  <NavLink href="#privacy">Privacy Policy</NavLink>
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

              {/* Other sections (Products, Services, About, Contact) go here */}

            </main>

            <footer className="bg-space-gray py-8 mt-12">
              <div className="container mx-auto px-4 text-center">
                <p>&copy; 2024 Katoshi Labs Ltd. All rights reserved.</p>
              </div>
            </footer>
          </div>
        </>
      )}
    </div>
  );
};

const Logo = () => (
  <div className="flex items-center space-x-2">
    <Hexagon size={32} className="text-white animate-pulse" />
    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
      Katoshi Labs
    </span>
  </div>
);

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-white hover:text-neon-blue transition-colors duration-300">
    {children}
  </a>
);

export default App;
