import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { Code, Cpu, Globe, Menu, X, Music, Hexagon } from 'lucide-react';
import Loading from './Loading';
import BinaryBackground from './BinaryBackground';
import Blog from './Blog';

const NavLink: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({ to, children, onClick }) => (
  <Link to={to} className="text-white hover:text-neon-blue transition-colors duration-300" onClick={onClick}>
    {children}
  </Link>
);

const Logo: React.FC = () => (
  <div className="flex items-center space-x-2">
    <Hexagon size={32} className="text-white animate-pulse" />
    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
      Katoshi Labs
    </span>
  </div>
);

const MainContent: React.FC = () => (
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
          { icon: <Code size={48} />, title: 'Custom Software Development', description: 'Transform your business with tailored software solutions.' },
          { icon: <Cpu size={48} />, title: 'AI & Machine Learning', description: 'Unlock the power of AI and machine learning to drive innovation.' },
          { icon: <Globe size={48} />, title: 'Web & Mobile Applications', description: 'Elevate your online presence with cutting-edge web and mobile applications.' },
        ].map((service, index) => (
          <div
            key={index}
            className="bg-space-gray p-6 rounded-lg text-center hover:transform hover:scale-105 transition-transform duration-300 shadow-neon"
          >
            <div className="text-neon-blue mb-4 flex justify-center animate-float">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
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
        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
        <p className="text-lg">
          To empower businesses and individuals with cutting-edge technology solutions,
          fostering innovation and growth in the digital age.
        </p>
        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
        <p className="text-lg">
          To become a leading global technology company, driving positive change and
          shaping the future of software development.
        </p>
      </div>
    </section>

    <section id="contact" className="text-center">
      <h2 className="text-3xl font-bold mb-8 animate-text-glow">Get in Touch</h2>
      <p className="text-xl mb-8 text-neon-blue">
        Ready to bring your ideas to life? Let's create something amazing together.
      </p>
      <a
        href="mailto:katoshilabs@gmail.com"
        className="bg-neon-blue text-deep-space px-8 py-3 rounded-full font-semibold hover:bg-white transition-colors duration-300 animate-pulse"
      >
        Contact Us
      </a>
    </section>
  </main>
);
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-deep-space text-white font-sans">
      <BinaryBackground />
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-6">
          <nav className="flex justify-between items-center">
            <Link to="/">
              <Logo />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/#products">Products</NavLink>
              <NavLink to="/#services">Services</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/#about">About</NavLink>
              <NavLink to="/#contact">Contact</NavLink>
            </div>
            <div className="md:hidden flex items-center">
              <Menu size={32} className="text-white hover:text-neon-blue" onClick={() => setIsMenuOpen(true)} />
            </div>
          </nav>
          {isMenuOpen && (
            <div className="md:hidden mt-4 bg-space-gray rounded-lg p-4">
              <nav className="flex flex-col space-y-2">
                <NavLink to="/" onClick={handleNavClick}>Home</NavLink>
                <NavLink to="/#products" onClick={handleNavClick}>Products</NavLink>
                <NavLink to="/#services" onClick={handleNavClick}>Services</NavLink>
                <NavLink to="/blog" onClick={handleNavClick}>Blog</NavLink>
                <NavLink to="/#about" onClick={handleNavClick}>About</NavLink>
                <NavLink to="/#contact" onClick={handleNavClick}>Contact</NavLink>
                <button onClick={() => setIsMenuOpen(false)} className="text-white hover:text-neon-blue">
                  <X size={24} />
                </button>
              </nav>
            </div>
          )}
        </header>
        {children}
        <footer className="bg-space-gray py-8 mt-12">
          {/* Footer content */}
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://www.facebook.com/katoshilabs" target="_blank" rel="noreferrer">
                <Facebook size={24} className="text-white hover:text-neon-blue" />
              </a>
              <a href="https://www.instagram.com/katoshilabs" target="_blank" rel="noreferrer">
                <Instagram size={24} className="text-white hover:text-neon-blue" />
              </a>
              <a href="https://twitter.com/katoshilabs" target="_blank" rel="noreferrer">
                <Twitter size={24} className="text-white hover:text-neon-blue" />
              </a>
            </div>
            <p className="text-gray-400 text-center">
              &copy; 2023 Katoshi Labs. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
