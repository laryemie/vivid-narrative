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
      note: 'We can provide more for both your personal brand and overall business goals, just say the word.',
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
      note: 'We can provide more for both your personal brand and overall business goals, just say the word.',
      tagline: 'You focus on the work. We ensure the world is aware of it.',
      icon: 'fa-calendar-check',
    },
    {
      title: '(3) Add-On Services',
      description: 'Extra Support for High-Impact Moments. Need more? Our premium add-ons are designed for those pivotal times — launching something new, stepping into the spotlight, or giving your brand the upgrade it deserves.',
      items: [
        'Personal Website Copywriting & Development',
        'Social Media Management (execution + engagement)',
        'Press Kit & Interview Coaching',
        'Digital Marketing',
      ],
      note: 'We can provide more for both your personal brand and overall business goals, just say the word.',
      icon: 'fa-puzzle-piece',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background/90 to-gray-50 dark:from-gray-900/90 dark:to-gray-800">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-secondary/20 to-primary/10 dark:from-secondary-900/20 dark:to-primary-900/10">
          <div className="container mx-auto px-6 text-center">
            <div className="inline-flex items-center justify-center space-x-6 sm:space-x-8 animate-fade-in">
              <img
                src="/favicon.ico"
                alt="Vivid Narrative Favicon"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full shadow-lg transition-transform hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/48?text=Favicon';
                }}
              />
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-josefin font-bold text-primary dark:text-primary-200 bg-gradient-to-r from-transparent to-primary/20 dark:to-primary-200/20 bg-clip-text">
                Explore Our Services
              </h1>
            </div>
          </div>
        </section>

        {/* Services Section with Gradient Background */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/10 to-secondary/10 dark:from-primary-900/10 dark:to-secondary-900/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 sm:mb-16">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-josefin font-semibold text-primary dark:text-primary-200 max-w-3xl mx-auto leading-snug">
                Discover tailored plans to amplify your personal brand with content that reflects your voice and vision.
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-800/95 rounded-2xl p-6 sm:p-7 md:p-8 border-2 border-gray-100 dark:border-gray-700 shadow-lg dark:shadow-gray-900/60 hover:shadow-xl dark:hover:shadow-gray-700/60 hover:-translate-y-2 transition-all duration-300 animate-fade-in"
                >
                  <div className="text-center mb-4">
                    <i className={`fas ${service.icon} text-2xl sm:text-3xl md:text-4xl text-primary dark:text-primary-200 mb-4`}></i>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-josefin font-medium text-foreground dark:text-gray-100">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base md:text-lg leading-relaxed text-left">
                    <strong className="block">{service.description.split('.')[0]}.</strong>
                    {service.description.split('.').slice(1).join('.').trim()}.
                  </p>
                  <button
                    onClick={() => setExpanded({ ...expanded, [Object.keys(expanded)[index]]: !expanded[Object.keys(expanded)[index]] })}
                    className="flex items-start justify-start text-gray-700 dark:text-gray-300 font-medium mb-4 hover:text-primary dark:hover:text-primary-200 transition-colors text-sm sm:text-base touch-manipulation"
                  >
                    <i className={`fas fa-${expanded[Object.keys(expanded)[index]] ? 'minus' : 'plus'} mr-2`}></i>
                    {expanded[Object.keys(expanded)[index]] ? 'Hide Details' : 'View Details'}
                  </button>
                  {expanded[Object.keys(expanded)[index]] && (
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-4 text-left">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <i className="fas fa-check-circle text-primary dark:text-primary-200 mr-2 mt-1"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.note && (
                    <p className="mt-2 text-gray-700 dark:text-gray-300 text-xs sm:text-sm md:text-base flex items-start">
                      <i className="fas fa-info-circle text-primary dark:text-primary-200 mr-2 mt-1"></i>
                      {service.note}
                    </p>
                  )}
                  {service.tagline && (
                    <p className="mt-2 italic text-gray-600 dark:text-gray-400 text-center text-xs sm:text-sm md:text-base">
                      {service.tagline}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-secondary/10 to-primary/10 dark:from-secondary-900/10 dark:to-primary-900/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-josefin font-bold text-foreground dark:text-gray-100 mb-6 sm:mb-8 md:mb-10">
              Still figuring out what you need?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground dark:text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
              We’re happy to guide you through. Book a discovery call below and let’s talk through it.
            </p>
            <Button variant="premium" size="lg" asChild className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 hover:bg-primary/90 transition-colors duration-300">
              <Link to="/contact">→ Book a Free Discovery Call</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}