import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroSection: React.FC = () => {
  const handleScroll = () => {
    const nextSection = document.querySelector("#next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[url('/vivid-narrative-uploads/hero.jpg')] bg-cover bg-center">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/20 md:from-background/70 md:to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="max-w-3xl text-center lg:text-left">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-josefin font-bold text-foreground mb-6 leading-tight">
              Influence Starts With a{" "}
              <span className="bg-gradient-to-r from-secondary to-secondary-dark bg-clip-text text-transparent">
                Vivid Narrative
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We help ambitious professionals amplify their personal brands
              through authentic, compelling content tailored uniquely to their
              voice.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                variant="premium"
                size="lg"
                asChild
                className="w-full sm:w-auto text-base sm:text-lg px-6 py-3 rounded-full shadow-md"
              >
                <Link to="/contact">→ Build Your Narrative</Link>
              </Button>
              <Button
                variant="elegant"
                size="lg"
                asChild
                className="w-full sm:w-auto text-base sm:text-lg px-6 py-3 rounded-full"
              >
                <Link to="/services">→ Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Chevron (only on mobile/tablet) */}
      <button
        onClick={handleScroll}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-background/70 backdrop-blur-md shadow-lg hover:bg-primary/80 transition-colors duration-300"
        aria-label="Scroll down"
      >
        <svg
          className="w-6 h-6 text-foreground animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
};
