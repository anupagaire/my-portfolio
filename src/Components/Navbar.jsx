import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, Code2, BookOpen, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  const navItems = [
    { name: 'Home', path: '/', icon: Home, isScroll: false },
    { name: 'About', path: 'about', icon: User, isScroll: true },
    { name: 'Projects', path: '/projects', icon: Code2, isScroll: false },
    { name: 'Skills', path: 'skills', icon: Sparkles, isScroll: true },
    { name: 'Internship', path: 'internships', icon: Briefcase, isScroll: true },
    { name: 'Research', path: '/research', icon: BookOpen, isScroll: false },
    // { name: 'Experience', path: '/experience', icon: Briefcase, isScroll: false },
  ];

  // Filter nav items based on route
  const displayedNavItems = location.pathname === '/' ? navItems : navItems.filter(item => ['Home', 'Projects'].includes(item.name));

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled 
          ? 'bg-slate-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">AG</span>
            </div>
            <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Anupa Gaire
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {displayedNavItems.map(({ name, path, icon, isScroll }) => (
              isScroll ? (
                <button
                  key={name}
                  onClick={() => scrollToSection(path)}
                  className="group relative px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  {React.createElement(icon, { className: 'w-4 h-4' })}
                  <span>{name}</span>
                </button>
              ) : (
                <Link
                  key={name}
                  to={path}
                  className="group relative px-4 py-2 rounded-full text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
                >
                  {React.createElement(icon, { className: 'w-4 h-4' })}
                  <span>{name}</span>
                </Link>
              )
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:scale-105 transition"
            >
              Let's Connect
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="w-10 h-10 bg-white/10 rounded-lg text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-2 pt-2 pb-3 bg-slate-900/90 rounded-2xl mt-2">
            {displayedNavItems.map(({ name, path, icon, isScroll }) => (
              isScroll ? (
                <button
                  key={name}
                  onClick={() => scrollToSection(path)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10 w-full text-left"
                >
                  {React.createElement(icon, { className: 'w-5 h-5' })}
                  {name}
                </button>
              ) : (
                <Link
                  key={name}
                  to={path}
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/10"
                >
                  {React.createElement(icon, { className: 'w-5 h-5' })}
                  {name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;