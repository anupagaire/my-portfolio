import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', isScroll: false },
  { name: 'About', path: 'about', isScroll: true },
  { name: 'Projects', path: '/projects', isScroll: false },
  { name: 'Skills', path: 'skills', isScroll: true },
  { name: 'Internship', path: 'internships', isScroll: true },
  { name: 'Research', path: '/research', isScroll: false },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // close mobile menu when page changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Home: dark theme | Other pages: light theme
  const theme = isHome
    ? {
        bar: scrolled
          ? 'bg-black/70 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent',
        text: 'text-white',
        link: 'text-white/60 hover:text-white',
        active: 'text-white border-white',
        cta: 'border-white/40 text-white hover:bg-white hover:text-black',
        mobile: 'bg-black/95 border-white/10',
        mobileLink: 'text-white/70 hover:text-white hover:bg-white/10',
      }
    : {
        bar: 'bg-white/90 backdrop-blur-md border-b border-gray-200',
        text: 'text-black',
        link: 'text-gray-500 hover:text-black',
        active: 'text-black border-black',
        cta: 'border-black text-black hover:bg-black hover:text-white',
        mobile: 'bg-white border-gray-200',
        mobileLink: 'text-gray-600 hover:text-black hover:bg-gray-100',
      };

  // On other pages show only main pages, on home show everything
  const displayedNavItems = isHome
    ? navItems
    : navItems.filter((item) => ['Home', 'Projects', 'Research'].includes(item.name));

  const isActive = (item) =>
    !item.isScroll &&
    (item.path === '/' ? location.pathname === '/' : location.pathname.startsWith(item.path));

  const renderItem = (item, mobile = false) => {
    const base = mobile
      ? `block w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${theme.mobileLink}`
      : `text-sm font-medium pb-1 border-b-2 transition-colors duration-200 ${
          isActive(item) ? theme.active : `border-transparent ${theme.link}`
        }`;

    return item.isScroll ? (
      <button key={item.name} onClick={() => scrollToSection(item.path)} className={base}>
        {item.name}
      </button>
    ) : (
      <Link key={item.name} to={item.path} className={base}>
        {item.name}
      </Link>
    );
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${theme.bar}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className={`flex items-center gap-3 ${theme.text}`}>
            <span className="w-9 h-9 border-2 border-current rounded-md flex items-center justify-center text-sm font-bold tracking-tight">
              AG
            </span>
            <span className="hidden sm:block text-lg font-semibold tracking-tight">
              Anupa Gaire
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {displayedNavItems.map((item) => renderItem(item))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`px-5 py-2 text-sm font-medium border rounded-full transition-colors duration-200 ${theme.cta}`}
            >
              Let's Connect
            </Link>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 ${theme.text}`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 border-t ${theme.mobile} ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-transparent'
        }`}
      >
        <div className="px-4 py-3 space-y-1">
          {displayedNavItems.map((item) => renderItem(item, true))}
          <Link
            to="/contact"
            className={`block text-center mt-2 px-4 py-2.5 text-sm font-medium border rounded-full ${theme.cta}`}
          >
            Let's Connect
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;