import React from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { HeroSection } from '@/components/sections/HeroSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Footer from '@/components/layout/Footer';
import { BrandHighlight } from '@/components/sections/BrandHighlight';
import { FAQSection } from '@/components/sections/FAQSection';

const Index = () => {
  const features = [
    { text: 'Personal Brand Strategy', icon: 'fa-solid fa-user-tie' },
    { text: 'Custom Content Creation', icon: 'fa-solid fa-pen-nib' },
    { text: 'Thought Leadership Positioning', icon: 'fa-solid fa-crown' },
    { text: 'Profile & Platform Optimization', icon: 'fa-solid fa-sliders' },
  ];

  const whyChoosePoints = [
    {
      title: 'Your Voice, Just Sharper',
      description: 'We don\'t replace your voice. We refine it so every word sounds like you on your very best day.',
      icon: 'fa-solid fa-microphone',
    },
    {
      title: 'Done-For-You Ease',
      description: 'You stay focused on your zone of genius while we handle the content — hands-on, personalised, and intentional.',
      icon: 'fa-solid fa-check-circle',
    },
    {
      title: 'Strategic by Design',
      description: 'Every piece we craft ties back to clear objectives. No fluff. Just purposeful storytelling.',
      icon: 'fa-solid fa-lightbulb',
    },
    {
      title: 'Humans Behind Every Word',
      description: 'You work with real people who listen deeply, think strategically, and write with the kind of empathy that drives connection and trust.',
      icon: 'fa-solid fa-users',
    },
    {
      title: 'Culture-Smart Storytelling',
      description: 'Whether your audience is local or global, we adapt your message with nuance and resonance.',
      icon: 'fa-solid fa-globe',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Discovery',
      description: 'We understand your goals, voice, and audience. Starts with a 1:1 strategy session.',
    },
    {
      number: '2',
      title: 'Strategy',
      description: 'We audit your presence, craft your brand voice, and build a clear roadmap. No guesswork, no generic fluff.',
    },
    {
      number: '3',
      title: 'Execution & Delivery',
      description: 'We create high-impact, done-for-you content tailored to your industry, tone, and goals. Published with consistency. Tracked for results.',
    },
  ];

  return (
    <div className="min-h-screen bg-background font-josefin text-foreground">
      <Navigation />

      <main>
        <HeroSection />
        <BrandHighlight />

        {/* What We Do */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl shadow-soft mb-8 sm:mb-10 md:mb-12 transform hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-pen text-xl sm:text-2xl text-accent-foreground mr-2"></i>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent-foreground uppercase tracking-wide">
                  Strategic Storytelling That Sounds Like You
                </p>
              </div>
              <div className="prose prose-sm sm:prose-base md:prose-lg text-foreground mb-8 sm:mb-10 md:mb-12 space-y-4">
                <p className="text-left text-base sm:text-lg md:text-xl leading-relaxed">
                  At Vivid Narrative, we don’t just write content — we translate your voice, values, and vision into engaging storytelling that sparks connection and builds lasting credibility.
                </p>
                <p className="text-left text-base sm:text-lg md:text-xl leading-relaxed">
                  For founders, CEOs, consultants, and ambitious professionals, we offer more than words. We offer clarity—the kind that aligns your online presence with your real-world brilliance, helping you show up with intention, influence, and authenticity.
                </p>
                <p className="text-left text-base sm:text-lg md:text-xl leading-relaxed">
                  Whether you’re scaling your brand, entering new markets, or simply ready to be seen as the expert you are, we help you lead the conversation with content that feels unmistakably you.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center bg-white/95 dark:bg-gray-900/95 rounded-lg p-3 sm:p-4 border-2 border-primary/20 shadow-soft hover:shadow-medium transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <i className={`${feature.icon} text-primary dark:text-primary-200 mr-2 sm:mr-3 text-lg sm:text-xl`}></i>
                    <span className="font-josefin font-medium text-sm sm:text-base text-foreground dark:text-gray-200">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-secondary/15 to-primary/15 dark:from-primary-950/15 dark:to-secondary-950/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-flex px-5 py-2 sm:px-7 sm:py-3 md:px-9 md:py-4 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-xl shadow-medium mb-6 sm:mb-8 md:mb-10 transform hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-star text-xl sm:text-2xl text-accent-foreground mr-2"></i>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent-foreground uppercase tracking-wider">
                  Why Choose Vivid Narrative?
                </p>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground dark:text-gray-50 font-josefin font-semibold">
                Because You Deserve More Than Generic Content
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12 md:mb-16">
              {whyChoosePoints.map((point, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-900/95 rounded-xl p-5 sm:p-6 md:p-7 border-2 border-gray-100 dark:border-gray-800 shadow-medium hover:shadow-large transition-all duration-300 delay-100 animate-fade-in-slow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex items-center mb-5 sm:mb-6 md:mb-8">
                      <i className={`${point.icon} text-2xl sm:text-3xl md:text-4xl text-primary dark:text-primary-200 mr-4 sm:mr-5 md:mr-6`}></i>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-josefin font-bold text-foreground dark:text-gray-50">
                        {point.title}
                      </h3>
                    </div>
                    <p className="text-foreground dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-josefin font-medium">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center">
              <Button variant="premium" size="lg" asChild className="text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 hover:bg-primary/90 transition-colors duration-300 bg-primary dark:bg-primary-700 text-white dark:text-gray-50">
                <Link to="/contact">→ Build Your Narrative</Link>
              </Button>
              <Button variant="elegant" size="lg" asChild className="text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 hover:bg-secondary/90 transition-colors duration-300 bg-secondary dark:bg-secondary-700 text-white dark:text-gray-50">
                <Link to="/services">→ Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/15 to-secondary/15 dark:from-primary-950/15 dark:to-secondary-950/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-flex px-5 py-2 sm:px-7 sm:py-3 md:px-9 md:py-4 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-xl shadow-medium mb-6 sm:mb-8 md:mb-10 transform hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-cogs text-xl sm:text-2xl text-accent-foreground mr-2"></i>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent-foreground uppercase tracking-wider">
                  How It Works
                </p>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground dark:text-gray-50 font-josefin font-semibold">
                Your Story. Our Strategy. Their Attention
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12 md:mb-16">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white/95 dark:bg-gray-900/95 rounded-xl p-5 sm:p-6 md:p-7 border-2 border-gray-100 dark:border-gray-800 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-slow"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-primary dark:bg-primary-700 text-primary-foreground dark:text-gray-50 rounded-full flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-josefin font-bold mb-5 sm:mb-6 md:mb-8">
                      {step.number}
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-josefin font-semibold text-foreground dark:text-gray-50 mb-3 sm:mb-4">
                      Step {step.number} — {step.title}
                    </h3>
                    <p className="text-foreground dark:text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed font-josefin font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center">
              <Button variant="premium" size="lg" asChild className="text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 hover:bg-primary/90 transition-colors duration-300 bg-primary dark:bg-primary-700 text-white dark:text-gray-50">
                <Link to="/contact">→ Begin Your Journey</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-secondary/15 to-primary/15 dark:from-primary-950/15 dark:to-secondary-950/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-12 md:mb-16">
              <div className="inline-flex px-5 py-2 sm:px-7 sm:py-3 md:px-9 md:py-4 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-xl shadow-medium mb-6 sm:mb-8 md:mb-10 transform hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-quote-left text-xl sm:text-2xl text-accent-foreground mr-2"></i>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-accent-foreground uppercase tracking-wider">
                  What Our Clients Are Saying
                </p>
              </div>
            </div>
            <TestimonialsSection />
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/15 to-secondary/15 dark:from-primary-950/15 dark:to-secondary-950/15">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex px-5 py-2 sm:px-7 sm:py-3 md:px-9 md:py-4 bg-gradient-to-r from-primary/70 to-secondary/70 rounded-xl shadow-medium mb-6 sm:mb-8 md:mb-10 transform hover:scale-105 transition-transform duration-300">
                <i className="fa-solid fa-star text-xl sm:text-2xl text-primary mr-2"></i>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">
                  Powerful Branding, Flexible Plans
                </p>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground dark:text-gray-50 font-josefin mb-8 sm:mb-10 md:mb-12">
                From one-time strategy plans to ongoing content retainers and add-ons, we offer flexible options designed to meet you exactly where you are—and scale as you grow.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-10 sm:mb-12 md:mb-16">
                <div className="bg-white/95 dark:bg-gray-900/95 rounded-xl p-5 sm:p-6 md:p-7 border-2 border-gray-100 dark:border-gray-800 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-slow">
                  <div className="flex flex-col items-center text-center">
                    <i className="fa-solid fa-chart-line text-2xl sm:text-3xl md:text-4xl text-primary dark:text-primary-200 mb-5 sm:mb-6 md:mb-8"></i>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-josefin font-semibold text-foreground dark:text-gray-50 mb-3 sm:mb-4">
                      One-Time Strategy Plan
                    </h3>
                    <p className="text-foreground dark:text-gray-300 text-sm sm:text-base md:text-lg font-josefin font-medium">
                      Foundational audit and strategic roadmap
                    </p>
                  </div>
                </div>
                <div className="bg-white/95 dark:bg-gray-900/95 rounded-xl p-5 sm:p-6 md:p-7 border-2 border-gray-100 dark:border-gray-800 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-slow">
                  <div className="flex flex-col items-center text-center">
                    <i className="fa-solid fa-calendar-check text-2xl sm:text-3xl md:text-4xl text-primary dark:text-primary-200 mb-5 sm:mb-6 md:mb-8"></i>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-josefin font-semibold text-foreground dark:text-gray-50 mb-3 sm:mb-4">
                      Monthly Retainers
                    </h3>
                    <p className="text-foreground dark:text-gray-300 text-sm sm:text-base md:text-lg font-josefin font-medium">
                      Silver & Gold tiers of ongoing content plans
                    </p>
                  </div>
                </div>
                <div className="bg-white/95 dark:bg-gray-900/95 rounded-xl p-5 sm:p-6 md:p-7 border-2 border-gray-100 dark:border-gray-800 shadow-medium hover:shadow-large transition-all duration-300 animate-fade-in-slow">
                  <div className="flex flex-col items-center text-center">
                    <i className="fa-solid fa-puzzle-piece text-2xl sm:text-3xl md:text-4xl text-primary dark:text-primary-200 mb-5 sm:mb-6 md:mb-8"></i>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-josefin font-semibold text-foreground dark:text-gray-50 mb-3 sm:mb-4">
                      Add-ons
                    </h3>
                    <p className="text-foreground dark:text-gray-300 text-sm sm:text-base md:text-lg font-josefin font-medium">
                      Website Development, PR Coaching, Social Media Management, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center">
                <Button variant="premium" size="lg" asChild className="text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 hover:bg-primary/90 transition-colors duration-300 bg-primary dark:bg-primary-700 text-white dark:text-gray-50">
                  <Link to="/contact">→ Get Your Custom Quote</Link>
                </Button>
                <Button variant="elegant" size="lg" asChild className="text-base sm:text-lg md:text-xl px-6 sm:px-8 py-3 hover:bg-secondary/90 transition-colors duration-300 bg-secondary dark:bg-secondary-700 text-white dark:text-gray-50">
                  <Link to="/services">→ Explore Services Details</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;