// App.tsx
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import BinaryBackground from './BinaryBackground';
import { Code, Cpu, Globe, Menu, X, Music, Hexagon } from 'lucide-react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import TermsOfUse from './TermsOfUse';
import PrivacyPolicy from './PrivacyPolicy';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-white hover:text-neon-blue transition-colors duration-300">
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

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the loading time as needed

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-deep-space text-white font-sans">
        <BinaryBackground />
        <div className="relative z-10">
          <header className="container mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
              <Logo />
              <div className="hidden md:flex space-x-6">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/terms-of-use">Terms of Use</NavLink>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                <NavLink to="#products">Products</NavLink>
                <NavLink to="#services">Services</NavLink>
                <NavLink to="#about">About</NavLink>
                <NavLink to="#contact">Contact</NavLink>
              </div>
              <button
                className="md:hidden text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </nav>
            {isMenuOpen && (
              <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-deep-space text-white">
                <ul className="flex flex-col space-y-4 p-4">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/terms-of-use">Terms of Use</NavLink>
                  </li>
                  <li>
                    <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="#products">Products</NavLink>
                  </li>
                  <li>
                    <NavLink to="#services">Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="#about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="#contact">Contact</NavLink>
                  </li>
                </ul>
              </div>
            )}
          </header>
          <main className="container mx-auto px-4 py-12">
            <Switch>
              <Route path="/terms-of-use" component={TermsOfUse} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              {/* Add more routes as needed */}
              <Route path="/" component={() => <div>Home page content</div>} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
