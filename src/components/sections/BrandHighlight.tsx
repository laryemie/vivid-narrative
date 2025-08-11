import React from 'react';

export const BrandHighlight: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-secondary/10 to-primary/10">
      <div className="container mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center space-x-6 animate-fly-in">
          <img
            src="/favicon.ico" // Replace with your favicon path
            alt="Vivid Narrative Favicon"
            className="w-28 h-28"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/48?text=Favicon';
            }}
          />
          <h1 className="text-8xl md:text-9xl font-josefin font-bold text-primary animate-glow">
            Vivid Narrative
          </h1>
        </div>
      </div>
    </section>
  );
};