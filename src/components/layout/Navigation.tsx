import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="relative group transition-transform duration-300 hover:scale-105">
            <Logo className="w-32 h-8 sm:w-40 sm:h-10" />
            <span className="absolute inset-x-0 -bottom-1 h-1 bg-primary/0 group-hover:bg-primary/50 rounded-full transition-all duration-300"></span>
          </Link>

          {/* Hamburger Button for Mobile */}
          <button
            className="md:hidden flex items-center p-2 rounded-full hover:bg-primary/10 transition-colors duration-200 touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row md:items-center absolute md:static top-full left-0 right-0 bg-background/95 md:bg-transparent border-b md:border-none border-border/50 md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0 transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0 md:translate-x-0 md:opacity-100'
            }`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`relative text-sm sm:text-base md:text-lg font-medium font-josefin transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.href ? 'text-primary' : 'text-foreground'
                } py-2 px-4 md:px-0 rounded-lg md:rounded-none hover:bg-primary/5 md:hover:bg-transparent group`}
              >
                {item.name}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary/0 group-hover:bg-primary/50 transition-all duration-200 ${
                    location.pathname === item.href ? 'bg-primary/50' : ''
                  } md:block hidden`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/50 hover:bg-primary/10 transition-all duration-200 text-sm border border-border/50"
              aria-label="Toggle theme"
            >
              <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'} text-foreground`}></i>
              <span>{isDarkMode ? 'Dark' : 'Light'}</span>
            </Button>
            <Button
              variant="premium"
              size="lg"
              asChild
              className="text-sm md:text-base px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-md"
            >
              <Link to="/contact">Build Your Narrative</Link>
            </Button>
          </div>

          {/* Mobile Buttons (shown when menu is open) */}
          <div
            className={`${
              isMenuOpen ? 'flex' : 'hidden'
            } md:hidden flex-col space-y-4 p-4 bg-background/95 border-b border-border/50 transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 hover:bg-primary/10 transition-all duration-200 w-full text-sm border border-border/50"
              aria-label="Toggle theme"
            >
              <i className={`fas ${isDarkMode ? 'fa-moon' : 'fa-sun'} text-foreground`}></i>
              <span>{isDarkMode ? 'Dark' : 'Light'}</span>
            </Button>
            <Button
              variant="premium"
              size="lg"
              asChild
              className="w-full text-sm px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-md"
            >
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                Build Your Narrative
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};