import React, { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/layout/Footer';

export default function Services() {
  const [expanded, setExpanded] = useState({
    strategy: false,
    retainer: false,
    addOn: false,
  });

  const services = [
    {
      title: '1. Personal Brand Strategy Plan',
      description: 'Lay the foundation for clarity, positioning, and growth. This is where every great brand begins — with deep understanding. We audit your current presence, uncover your authentic voice, and build a clear, custom roadmap that sets you up for success.',
      items: [
        'Comprehensive Online Audit',
        'Personal Brand Positioning Map',
        'Audience & Industry Analysis',
        'Messaging Strategy & Narrative Guide',
        'Strategic Content Roadmap',
        'Professional Bio Rewrite',
        'Visual Identity & Profile Optimization',
        'Engagement & Credibility Framework',
      ],
      note: '📌 Ideal for professionals seeking clarity before execution.',
      price: 'Starts at $500',
      tagline: 'You’ve been doing great work behind the scenes. This is how the world finally sees it.',
      icon: 'fa-chart-line',
    },
    {
      title: '2. Monthly Retainer Plans',
      description: 'From strategy to done-for-you execution. Once we’ve built your blueprint, our retainer plans ensure you consistently show up with confidence and influence, all without having to write a word yourself.',
      items: [
        'Ongoing Personal Brand Strategy',
        'Monthly Content Calendar/Ongoing Content Strategy',
        '6 to 15 Voice-Aligned Posts/Articles (Based on plan)',
        'Storytelling & Engagement Support',
        'Analytics & Performance Review',
        'Advisory & Coaching Touchpoints',
        'Access to Team Support (for evolving brand needs)',
      ],
      note: '📌 Available in Silver & Gold tiers. Designed for growth.',
      price: 'Starting at $800/Month',
      tagline: 'You focus on the work. We ensure the world is aware of it.',
      icon: 'fa-calendar-check',
    },
    {
      title: '🧩 Add-On Services',
      description: 'Extra Support for High-Impact Moments. Need more? Our premium add-ons are designed for those pivotal times — launching something new, stepping into the spotlight, or giving your brand the upgrade it deserves.',
      items: [
        'Personal Website Copywriting & Development',
        'Social Media Management (execution + engagement)',
        'Press Kit & Interview Coaching',
        'Digital Marketing',
      ],
      note: '📌 Pricing available upon request. Scope varies.',
      icon: 'fa-puzzle-piece',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section with Background Image */}
        <section className="py-16 bg-[url('/vivid-narrative-uploads/services.jpg')] bg-cover bg-center mx-auto px-6 relative min-h-[400px] z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background/70 to-transparent" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">

              
              
              <p className="text-xl text-black leading-relaxed">
                
              </p>
            </div>
          </div>
        </section>

        {/* Services Section with Gradient Background */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full shadow-soft mb-6">
              <p className="text-2xl font-bold text-accent-foreground uppercase tracking-wide">
                Our Services
              </p>
            </div>
              <h2 className="text-3xl md:text-4xl font-josefin font-bold text-gray-800 max-w-3xl mx-auto leading-snug">
              Discover tailored plans to amplify your personal brand with content that reflects your voice and vision.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/70 backdrop-blur-md rounded-xl p-6 shadow-lg transform translate-y-2 hover:-translate-y-1 transition-transform duration-300 border border-gray-100"
                >
                  {service.price && (
                    <div className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2 text-center">
                      {service.price}
                    </div>
                  )}
                  <div className="text-center mb-4">
                    <i className={`fas ${service.icon} text-3xl text-primary mb-2`}></i>
                    <h3 className="text-xl font-josefin font-medium text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-base leading-relaxed text-center">{service.description}</p>

                  <button
                    onClick={() => setExpanded({ ...expanded, [Object.keys(expanded)[index]]: !expanded[Object.keys(expanded)[index]] })}
                    className="flex items-center justify-center text-gray-700 font-medium mb-4 hover:text-primary transition-colors"
                  >
                    <i className={`fas fa-${expanded[Object.keys(expanded)[index]] ? 'minus' : 'plus'} mr-2`}></i>
                    {expanded[Object.keys(expanded)[index]] ? 'Hide Details' : 'View Details'}
                  </button>

                  {expanded[Object.keys(expanded)[index]] && (
                    <ul className="space-y-2 text-gray-600 text-sm leading-relaxed mb-4 text-center">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex justify-center items-center">
                          <i className="fas fa-check-circle text-primary mr-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.note && (
                    <p className="mt-2 text-gray-700 text-sm flex justify-center items-center">
                      <i className="fas fa-info-circle text-primary mr-2"></i>
                      {service.note}
                    </p>
                  )}
                  {service.tagline && (
                    <p className="mt-2 italic text-gray-600 text-center">{service.tagline}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-b from-secondary/10 to-primary/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-display font-josefin font-bold text-foreground mb-8">
              Still figuring out what you need?
            </h2>
            <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto">
              We’re happy to guide you through. Book a discovery call below and let’s talk through it.
            </p>
            <Button variant="premium" size="xl" asChild>
              <Link to="/contact">→ Book a Free Discovery Call</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}