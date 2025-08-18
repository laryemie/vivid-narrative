import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/layout/Footer';

export default function About() {
  const values = [
    {
      title: 'Authenticity',
      description: 'We honor your unique voice. We refine it, never replace it.',
      icon: 'fa-user',
    },
    {
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards—delivering flawless content, every time.',
      icon: 'fa-star',
    },
    {
      title: 'Empowerment',
      description: 'We give you the tools and confidence to own your narrative and lead with conviction.',
      icon: 'fa-handshake',
    },
    {
      title: 'Strategic Impact',
      description: 'We align every story and post with clear objectives that move your brand forward.',
      icon: 'fa-bullseye',
    },
    {
      title: 'Inclusivity',
      description: 'We craft culturally intelligent storytelling that resonates locally and globally.',
      icon: 'fa-globe',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background/90 to-gray-50 dark:from-gray-900/90 dark:to-gray-800">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-secondary/20 to-primary/10 dark:from-secondary-900/20 dark:to-primary-900/10">
          <div className="container mx-auto px-4 text-center">
            <div className="flex flex-col items-center space-y-4 sm:space-y-6 animate-fade-in">
              <img
                src="/favicon.ico"
                alt="Vivid Narrative Favicon"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full shadow-lg transition-transform hover:scale-105"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/48?text=Favicon';
                }}
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-josefin font-bold text-primary dark:text-primary-200 bg-gradient-to-r from-transparent to-primary/20 dark:to-primary-200/20 bg-clip-text leading-tight">
                Our Story
              </h1>
            </div>
          </div>
        </section>

        {/* Story Content */}
        <section className="py-10 sm:py-14 bg-gradient-to-b from-primary/10 to-secondary/10 dark:from-primary-900/10 dark:to-secondary-900/10">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl sm:max-w-3xl mx-auto">
              <div className="prose prose-sm sm:prose-base md:prose-lg text-foreground dark:text-gray-200">
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-5 sm:mb-6">
                  The idea for Vivid Narrative began with a simple yet powerful insight: brilliant professionals often struggle to communicate their true value online...
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-5 sm:mb-6">
                  Today, we partner with CEOs, founders, coaches, freelancers, and rising professionals to amplify their stories—not just for show, but for strategic impact...
                </p>
                <p className="text-base sm:text-lg md:text-xl leading-relaxed font-semibold text-foreground dark:text-gray-100">
                  Because at Vivid Narrative, we believe <strong>influence starts from within</strong>. And when you tell your story with intention, everything changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-10 sm:py-14 bg-gradient-to-b from-secondary/10 to-primary/10 dark:from-secondary-900/10 dark:to-primary-900/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-5 py-2 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-full shadow-md mb-6 sm:mb-8">
                <p className="text-base sm:text-lg md:text-xl font-bold text-accent-foreground uppercase tracking-wide">
                  Our Core Values
                </p>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-foreground dark:text-gray-200 mb-8 sm:mb-12">
                These principles guide every word we write, every strategy we design, and every partnership we forge:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 md:gap-10">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white/95 dark:bg-gray-800/95 rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-center">
                      <i className={`fas ${value.icon} text-2xl sm:text-3xl md:text-4xl text-primary dark:text-primary-200 mb-3 sm:mb-4`}></i>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-josefin font-bold text-foreground dark:text-gray-100 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-foreground dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 sm:py-14 bg-gradient-to-b from-primary/10 to-secondary/10 dark:from-primary-900/10 dark:to-secondary-900/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-josefin font-bold text-foreground dark:text-gray-100 mb-5 sm:mb-7">
              Ready to Tell Your Story, Your Way?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground dark:text-gray-400 mb-6 sm:mb-8 max-w-xl mx-auto">
              Let's partner to create a personal brand that's unmistakably you—and impossible to ignore.
            </p>
            <Button
              variant="premium"
              size="lg"
              asChild
              className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 hover:bg-primary/90 transition-colors duration-300"
            >
              <Link to="/contact">Build Your Narrative →</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
