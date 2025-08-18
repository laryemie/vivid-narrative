import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-[url('/vivid-narrative-uploads/hero.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="max-w-4xl">
            
            
            <h1 className="text-hero font-josefin font-bold text-foreground mb-8 leading-tight">
              Influence Starts With a{' '}
              <span className="bg-gradient-to-r from-secondary to-secondary-dark bg-clip-text text-transparent">
                Vivid Narrative
              </span>
            </h1>
            
            <p className="text-xl text-foreground mb-12 max-w-2xl leading-relaxed">
              We help ambitious professionals amplify their personal brands through authentic, 
              compelling content tailored uniquely to their voice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button variant="premium" size="xl" asChild>
                <Link to="/contact">→ Build Your Narrative</Link>
              </Button>
              <Button variant="elegant" size="xl" asChild>
                <Link to="/services">→ Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};