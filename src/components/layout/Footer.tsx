import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSignUp = () => {
    // Placeholder for newsletter signup logic
    console.log('Sign up with email:', email);
  };

  return (
    <>
      {/* Footer Start */}
      <footer className="py-16 bg-gradient-to-b from-primary/10 to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Newsletter */}
            <div className="p-4 transition-opacity duration-300 delay-100">
              <div className="bg-gradient-to-r from-secondary/20 to-secondary/80 rounded-lg p-4 h-full shadow-soft border-4 border-primary">
                <div className="text-center">
                  <h4 className="text-lg font-josefin font-bold text-primary mb-4">Newsletter</h4>
                  <p className="text-primary mb-4">
                    Stay updated with our latest insights and offerings. Subscribe to our newsletter.
                  </p>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email"
                      className="w-full rounded-full py-3 px-4 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                    <Button
                      variant="premium"
                      size="sm"
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 rounded-full py-2 px-4"
                      onClick={handleSignUp}
                    >
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Explore */}
            <div className="p-4 transition-opacity duration-300 delay-300">
              <div className="bg-gradient-to-r from-secondary/80 to-secondary/20 rounded-lg p-4 h-full shadow-soft border-4 border-primary">
                <h4 className="text-lg font-josefin font-bold text-center text-primary mb-4">Explore</h4>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-foreground hover:text-primary font-josefin flex items-center">
                      <i className="fas fa-home mr-2"></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-foreground hover:text-primary flex items-center">
                      <i className="fas fa-cogs mr-2"></i> Explore Our Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-foreground hover:text-primary flex items-center">
                      <i className="fas fa-info-circle mr-2"></i> About Us
                    </Link>
                  </li>
                  
                  <li>
                    <Link to="/contact" className="text-foreground hover:text-primary flex items-center">
                      <i className="fas fa-envelope mr-2"></i> Book A Discovery Call
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-4 transition-opacity duration-300 delay-500">
              <div className="bg-gradient-to-r from-secondary/20 to-secondary/80 rounded-lg p-4 h-full shadow-soft border-4 border-primary">
                <h4 className="text-lg font-josefin font-bold text-center text-primary mb-4">Contact Info</h4>
                <ul className="space-y-2">
                  <li>
                    <a href="https://vividnarrative.com" className="text-semibold hover:text-primary font-josefin flex items-center">
                      <i className="fas fa-globe mr-2"></i> vividnarrative.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@vividnarrative.com" className="text-foreground font-josefin hover:text-primary flex items-center">
                      <i className="fas fa-envelope mr-2"></i> hello@vividnarrative.com
                    </a>
                  </li>
                </ul>
                <div className="flex items-center mt-4 space-x-2">
                  <a href="" target="_blank" className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-primary-dark">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://x.com/vividnarrative_" target="_blank" className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-primary-dark">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/vivid.narrative/" target="_blank" className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-primary-dark">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/vividnarrative/" target="_blank" className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-white hover:bg-primary-dark">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Logo */}
            <div className="p-4 transition-opacity duration-300 delay-700">
              <div className="bg-gradient-to-r from-secondary/80 to-secondary/20 rounded-lg p-4 h-full shadow-soft border-4 border-primary">
                <img
                  src="/vivid-narrative-uploads/Purple.png" 
                  alt="Vivid Narrative Logo"
                  className="mx-auto mb-3 max-w-[200px] h-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/200x100?text=Logo+Not+Found';
                  }}
                />
                <p className="text-foreground font-josefin">Amplifying your personal brand through strategic storytelling.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Start */}
      <div className="py-4 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <span className="text-foreground">
                <Link to="/" className="hover:text-primary border-b border-transparent hover:border-primary">
                  <i className="fas fa-copyright mr-2"></i>Vivid Narrative
                </Link>
                , 2025. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright End */}
    </>
  );
};

export default Footer;