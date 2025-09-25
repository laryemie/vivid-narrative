import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export const Navigation: React.FC = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem("theme") === "dark"
  );

  // Sync theme with localStorage
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const navItems = [
    { name: "Home", href: "/", icon: "fa-home" },
    { name: "About", href: "/about", icon: "fa-user" },
    { name: "Services", href: "/services", icon: "fa-cogs" },
    { name: "Contact", href: "/contact", icon: "fa-envelope" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-2 sm:px-4 py-1 sm:py-2">
        <div className="flex flex-nowrap items-center justify-between gap-1 sm:gap-2">
          {/* Logo */}
          <Link
            to="/"
            className="relative group transition-transform duration-300 hover:scale-105"
            aria-label="Go to homepage"
          >
            <div className="relative w-24 sm:w-20 md:w-24 lg:w-28 aspect-[5/1] flex items-center">
              <Logo className="w-full h-auto object-contain" />
              <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary/0 group-hover:bg-primary/50 rounded-full transition-all duration-300" />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 lg:space-x-6">
            {navItems.map((item) => (
              <React.Fragment key={item.name}>
                {/* Mobile Icons (visible below sm) */}
                <Link
                  to={item.href}
                  className={`sm:hidden relative text-xs font-medium font-josefin transition-colors duration-200 hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground"
                  } py-1 px-0.5`}
                  aria-label={item.name}
                >
                  <i className={`fas ${item.icon} text-base`} />
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary/0 group-hover:bg-primary/50 transition-all duration-200 ${
                      location.pathname === item.href ? "bg-primary/50" : ""
                    }`}
                  />
                </Link>
                {/* Desktop Text Links (visible sm and above) */}
                <Link
                  to={item.href}
                  className={`hidden sm:block relative text-sm sm:text-base md:text-base lg:text-lg font-medium font-josefin transition-colors duration-200 hover:text-primary ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground"
                  } py-1 px-1 sm:px-2`}
                >
                  {item.name}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary/0 group-hover:bg-primary/50 transition-all duration-200 ${
                      location.pathname === item.href ? "bg-primary/50" : ""
                    }`}
                  />
                </Link>
              </React.Fragment>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsDarkMode(!isDarkMode)}
              aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
              className="flex items-center gap-1 px-1 sm:px-2 py-1 sm:py-1.5 rounded-full bg-background/50 hover:bg-primary/10 transition-all duration-200 text-xs sm:text-sm border border-border/50"
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
              size="sm"
              asChild
              className="text-xs sm:text-sm md:text-sm lg:text-base px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-200 shadow-md"
            >
              <Link to="/contact">Build Your Narrative</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};