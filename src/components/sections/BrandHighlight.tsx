import React from "react";

export const BrandHighlight: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-secondary/10 to-primary/10">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fly-in">
          {/* Brand Icon */}
          <img
            src="/favicon.ico" // Replace with your favicon path
            alt="Vivid Narrative Favicon"
            className="w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/48?text=Favicon";
            }}
          />

          {/* Brand Title */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-josefin font-bold text-primary leading-tight">
            Vivid Narrative
          </h1>
        </div>
      </div>
    </section>
  );
};
