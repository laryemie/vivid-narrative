import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center bg-[url('/vivid-narrative-Uploads/hero.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-transparent" />
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10">
        <div className="flex flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="max-w-3xl text-left">
            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-josefin font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Influence Starts With a{' '}
              <span className="bg-gradient-to-r from-secondary to-secondary-dark bg-clip-text text-transparent">
                Vivid Narrative
              </span>
            </h1>
            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/90 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl leading-relaxed">
              We help ambitious professionals amplify their personal brands through authentic, compelling content tailored uniquely to their voice.
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-start items-center">
              <Button
                variant="premium"
                size="sm"
                asChild
                className="text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-5 py-1 sm:py-2 md:py-3 rounded-full bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary/80 shadow-md transition-all duration-200"
              >
                <Link to="/contact">→ Build Your Narrative</Link>
              </Button>
              <Button
                variant="elegant"
                size="sm"
                asChild
                className="text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-5 py-1 sm:py-2 md:py-3 rounded-full border border-border/50 hover:bg-primary/10 transition-all duration-200"
              >
                <Link to="/services">→ Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};