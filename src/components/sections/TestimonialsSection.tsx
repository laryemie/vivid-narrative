import React from 'react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Vivid Narrative helped me go from invisible online to confidently visible — and it changed how people saw my work.",
      author: "Kaothar O.",
      role: "Coach & Entrepreneur",
      image: "/vivid-narrative-uploads/testimonial.jpg"
    },
    {
      quote: "Vivid Narrative didn't just write for me. They listened, mirrored my voice, and helped me sound more like myself.",
      author: "Adams R.",
      role: "Tech Founder",
      image: "/vivid-narrative-uploads/testimonial.jpg"
    },
    {
      quote: "Every piece of content felt intentional, strategic, and authentic. I stopped dreading content. Now, I own my voice.",
      author: "Rotimi O.",
      role: "CEO",
      image: "/vivid-narrative-uploads/testimonial.jpg"
    },
    {
      quote: "The strategy guide alone gave me more clarity than months of trying to figure it out myself.",
      author: "Samuel F.",
      role: "Consultant",
      image: "/vivid-narrative-uploads/testimonial.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/10 to-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-8xl md:text-4xl font-josefin font-bold uppercase tracking-wide bg-gradient-to-r from-secondary/90 to-primary/90 bg-clip-text text-transparent">
            TRUSTED BY PROFESSIONALS ACROSS 4 CONTINENTS — BECAUSE REAL INFLUENCE KNOWS NO BORDERS
          </p>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 bg-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-8"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover shadow-soft"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/64?text=No+Image';
                    }}
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <blockquote className="text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};