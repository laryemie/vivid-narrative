import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { FaMoon, FaSun } from 'react-icons/fa6';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Apply theme classes to body
  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('light', !isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative group transition-transform duration-300 hover:scale-105"
          >
            <Logo className="w-24 h-6 sm:w-32 sm:h-8 object-contain" />
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary/0 group-hover:bg-primary transition-all duration-300"></span>
          </Link>

          {/* Right Side: Dark Mode Button and Hamburger (Mobile) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Dark Mode Button (Always Visible) */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center gap-1.5 p-2 rounded-full bg-background/50 hover:bg-primary/10 border border-border/50 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaMoon className="w-4 h-4 text-foreground" />
              ) : (
                <FaSun className="w-4 h-4 text-foreground" />
              )}
            </Button>

            {/* Hamburger Button (Mobile Only) */}
            <button
              className="md:hidden flex items-center p-2 rounded-full hover:bg-primary/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Pop-Out Animation */}
      <div
        className={`md:hidden flex-col items-center py-6 bg-gradient-to-b from-background/95 to-secondary/20 border-t border-primary/30 transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? 'flex scale-y-100 opacity-100'
            : 'hidden scale-y-95 opacity-0'
        } origin-top shadow-lg`}
      >
        {/* Mobile Links */}
        <div className="flex flex-col items-center space-y-4 w-full px-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`relative text-base font-josefin font-medium transition-colors duration-200 hover:text-primary hover:bg-primary/10 rounded-lg px-3 py-2 w-full text-center ${
                location.pathname === item.href ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.name}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary/0 group-hover:bg-primary transition-all duration-200 ${
                  location.pathname === item.href ? 'bg-primary/50' : ''
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile CTA Button */}
        <div className="mt-4 w-11/12 px-4">
          <Button
            variant="premium"
            size="lg"
            asChild
            className="w-full text-base px-4 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary/80 shadow-md transition-all duration-200"
          >
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Build Your Narrative
            </Link>
          </Button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex container mx-auto px-4 sm:px-6 py-2 items-center justify-between">
        <div className="flex items-center md:space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative text-base lg:text-lg font-josefin font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === item.href ? 'text-primary' : 'text-foreground'
              } py-2 px-2`}
            >
              {item.name}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary/0 group-hover:bg-primary transition-all duration-200 ${
                  location.pathname === item.href ? 'bg-primary/50' : ''
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="flex items-center space-x-3 lg:space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="flex items-center gap-1.5 p-2 rounded-full bg-background/50 hover:bg-primary/10 border border-border/50 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FaMoon className="w-4 h-4 text-foreground" />
            ) : (
              <FaSun className="w-4 h-4 text-foreground" />
            )}
            <span className="hidden sm:inline text-sm">
              {isDarkMode ? 'Dark' : 'Light'}
            </span>
          </Button>
          <Button
            variant="premium"
            size="lg"
            asChild
            className="text-sm lg:text-base px-4 lg:px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary/80 shadow-md transition-all duration-200"
          >
            <Link to="/contact">Build Your Narrative</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};