import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-[0_4px_15px_rgba(0,0,0,0.05)]">
      <div className="container mx-auto px-3 sm:px-6 py-2 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="relative group transition-transform duration-300 hover:scale-105"
          >
            <Logo className="w-28 h-8 sm:w-40 sm:h-10" />
            <span className="absolute inset-x-0 -bottom-1 h-1 bg-primary/0 group-hover:bg-primary/50 rounded-full transition-all duration-300"></span>
          </Link>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex items-center p-2 rounded-full hover:bg-primary/10 transition-colors duration-200 touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 text-foreground"
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
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center md:space-x-6 lg:space-x-8`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative text-base lg:text-lg font-medium font-josefin transition-colors duration-200 hover:text-primary ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground"
                } py-2 px-2`}
              >
                {item.name}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-0.5 bg-primary/0 group-hover:bg-primary/50 transition-all duration-200 ${
                    location.pathname === item.href ? "bg-primary/50" : ""
                  } hidden md:block`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/50 hover:bg-primary/10 transition-all duration-200 text-sm border border-border/50"
              aria-label="Toggle theme"
            >
              <i
                className={`fas ${
                  isDarkMode ? "fa-moon" : "fa-sun"
                } text-foreground`}
              ></i>
              <span className="hidden sm:inline">
                {isDarkMode ? "Dark" : "Light"}
              </span>
            </Button>
            <Button
              variant="premium"
              size="lg"
              asChild
              className="text-sm lg:text-base px-4 lg:px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-md"
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
        } md:hidden flex-col space-y-4 px-4 pb-4 bg-background/95 border-t border-border/50 transition-all duration-300 ease-in-out`}
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={`text-base font-medium py-2 px-3 rounded-lg transition-colors duration-200 hover:bg-primary/5 ${
              location.pathname === item.href
                ? "text-primary"
                : "text-foreground"
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 hover:bg-primary/10 transition-all duration-200 w-full text-sm border border-border/50"
          aria-label="Toggle theme"
        >
          <i
            className={`fas ${
              isDarkMode ? "fa-moon" : "fa-sun"
            } text-foreground`}
          ></i>
          <span>{isDarkMode ? "Dark" : "Light"}</span>
        </Button>
        <Button
          variant="premium"
          size="lg"
          asChild
          className="w-full text-base px-4 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-md"
        >
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Build Your Narrative
          </Link>
        </Button>
      </div>
    </nav>
  );
};
