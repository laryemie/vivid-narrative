import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem("theme") === "dark"
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Sync theme with localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative group transition-transform duration-300 hover:scale-105"
            aria-label="Go to homepage"
          >
            <Logo className="w-28 h-8 sm:w-36 sm:h-9 md:w-40 md:h-10" />
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary/0 group-hover:bg-primary/50 rounded-full transition-all duration-300" />
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className="lg:hidden flex items-center p-2 rounded-full hover:bg-primary/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 touch-manipulation"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-base font-medium font-josefin transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground"
                } py-2 px-2`}
              >
                {item.name}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary/0 group-hover:bg-primary/50 transition-all duration-200 ${
                    location.pathname === item.href ? "bg-primary/50" : ""
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/50 hover:bg-primary/10 transition-all duration-200 text-sm border border-border/50"
            >
              <i
                className={`fas ${isDarkMode ? "fa-moon" : "fa-sun"} text-foreground`}
              />
              <span className="hidden sm:inline">
                {isDarkMode ? "Dark" : "Light"}
              </span>
            </Button>
            <Button
              variant="premium"
              size="lg"
              asChild
              className="text-sm px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-md"
            >
              <Link to="/contact">Build Your Narrative</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } lg:hidden flex-col items-center space-y-6 py-6 bg-background/95 border-t border-border/50 transition-all duration-300 ease-in-out absolute w-full left-0 top-full shadow-md`}
      >
        {/* Mobile Links */}
        <div className="flex flex-col items-center space-y-4 w-full">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`relative text-base font-medium font-josefin transition-colors duration-200 hover:text-primary ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-foreground"
              } py-2 px-3`}
            >
              {item.name}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary/0 group-hover:bg-primary/50 transition-all duration-200 ${
                  location.pathname === item.href ? "bg-primary/50" : ""
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile Buttons */}
        <div className="flex flex-col space-y-3 w-10/12 max-w-md">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-background/50 hover:bg-primary/10 transition-all duration-200 text-base border border-border/50"
          >
            <i
              className={`fas ${isDarkMode ? "fa-moon" : "fa-sun"} text-foreground`}
            />
            <span>{isDarkMode ? "Dark" : "Light"}</span>
          </Button>
          <Button
            variant="premium"
            size="lg"
            asChild
            className="w-full text-base px-4 py-2 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-md"
          >
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Build Your Narrative
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};