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
      description:
        'Lay the foundation for clarity, positioning, and growth. This is where every great brand begins — with deep understanding. We audit your current presence, uncover your authentic voice, and build a clear, custom roadmap that sets you up for success.',
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
      tagline:
        'You’ve been doing great work behind the scenes. This is how the world finally sees it.',
      icon: 'fa-chart-line',
    },
    {
      title: '2. Monthly Retainer Plans',
      description:
        'From strategy to done-for-you execution. Once we’ve built your blueprint, our retainer plans ensure you consistently show up with confidence and influence, all without having to write a word yourself.',
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
      title: '3. Add-On Services',
      description:
        'Extra Support for High-Impact Moments. Need more? Our premium add-ons are designed for those pivotal times — launching something new, stepping into the spotlight, or giving your brand the upgrade it deserves.',
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
        <section className="py-12 sm:py-16 bg-gradient-to-b from-secondary/20 to-primary/10 dark:from-secondary-900/20 dark:to-primary-900/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 animate-fade-in">
              <img
                src="/favicon.ico"
                alt="Vivid Narrative Favicon"
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full shadow-lg transition-transform hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/48?text=Favicon';
                }}
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-josefin font-bold text-primary dark:text-primary-200 bg-gradient-to-r from-transparent to-primary/20 dark:to-primary-200/20 bg-clip-text leading-tight">
                Explore Our Services
              </h1>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-10 sm:py-14 bg-gradient-to-b from-primary/10 to-secondary/10 dark:from-primary-900/10 dark:to-secondary-900/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-14">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-josefin font-semibold text-primary dark:text-primary-200 max-w-2xl mx-auto leading-snug">
                Discover tailored plans to amplify your personal brand with
                content that reflects your voice and vision.
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-800/95 rounded-2xl p-5 sm:p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in"
                >
                  <div className="text-center mb-3">
                    <i
                      className={`fas ${service.icon} text-2xl sm:text-3xl md:text-4xl text-primary dark:text-primary-200 mb-3`}
                    ></i>
                    <h3 className="text-lg sm:text-xl font-josefin font-medium text-foreground dark:text-gray-100">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm sm:text-base leading-relaxed text-left">
                    <strong className="block">
                      {service.description.split('.')[0]}.
                    </strong>
                    {service.description.split('.').slice(1).join('.').trim()}.
                  </p>
                  <button
                    onClick={() =>
                      setExpanded({
                        ...expanded,
                        [Object.keys(expanded)[index]]:
                          !expanded[Object.keys(expanded)[index]],
                      })
                    }
                    className="flex items-center text-gray-700 dark:text-gray-300 font-medium mb-3 hover:text-primary dark:hover:text-primary-200 transition-colors text-sm sm:text-base"
                  >
                    <i
                      className={`fas fa-${
                        expanded[Object.keys(expanded)[index]]
                          ? 'minus'
                          : 'plus'
                      } mr-2`}
                    ></i>
                    {expanded[Object.keys(expanded)[index]]
                      ? 'Hide Details'
                      : 'View Details'}
                  </button>
                  {expanded[Object.keys(expanded)[index]] && (
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 text-left">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <i className="fas fa-check-circle text-primary dark:text-primary-200 mr-2 mt-1"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {service.note && (
                    <p className="mt-2 text-gray-700 dark:text-gray-300 text-xs sm:text-sm flex items-start">
                      <i className="fas fa-info-circle text-primary dark:text-primary-200 mr-2 mt-1"></i>
                      {service.note}
                    </p>
                  )}
                  {service.tagline && (
                    <p className="mt-2 italic text-gray-600 dark:text-gray-400 text-center text-xs sm:text-sm">
                      {service.tagline}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 sm:py-14 bg-gradient-to-b from-secondary/10 to-primary/10 dark:from-secondary-900/10 dark:to-primary-900/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-josefin font-bold text-foreground dark:text-gray-100 mb-4 sm:mb-6">
              Still figuring out what you need?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto">
              We’re happy to guide you through. Book a discovery call below and
              let’s talk through it.
            </p>
            <Button
              variant="premium"
              size="lg"
              asChild
              className="text-sm sm:text-base px-5 sm:px-7 py-2.5 hover:bg-primary/90 transition-colors duration-300"
            >
              <Link to="/contact">→ Book a Free Discovery Call</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
