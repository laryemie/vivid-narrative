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
    'Personal Brand Strategy',
    'Custom Content Creation', 
    'Thought Leadership Positioning',
    'Profile & Platform Optimization'
  ];

  const whyChoosePoints = [
    {
      title: 'Your Voice, Just Sharper',
      description: 'We don\'t replace your voice. We refine it so every word sounds like you on your very best day.',
      icon: 'fas fa-microphone'
    },
    {
      title: 'Done-For-You Ease',
      description: 'You stay focused on your zone of genius while we handle the content — hands-on, personalised, and intentional.',
      icon: 'fas fa-check-circle'
    },
    {
      title: 'Strategic by Design',
      description: 'Every piece we craft ties back to clear objectives. No fluff. Just purposeful storytelling.',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Humans Behind Every Word',
      description: 'You work with real people who listen deeply, think strategically, and write with the kind of empathy that drives connection and trust.',
      icon: 'fas fa-users'
    },
    {
      title: 'Culture-Smart Storytelling',
      description: 'Whether your audience is local or global, we adapt your message with nuance and resonance.',
      icon: 'fas fa-globe'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Discovery',
      description: 'We understand your goals, voice, and audience. Starts with a 1:1 strategy session.'
    },
    {
      number: '2', 
      title: 'Strategy',
      description: 'We audit your presence, craft your brand voice, and build a clear roadmap. No guesswork, no generic fluff.'
    },
    {
      number: '3',
      title: 'Execution & Delivery',
      description: 'We create high-impact, done-for-you content tailored to your industry, tone, and goals. Published with consistency. Tracked for results.'
    }
  ];

  return (
    <div className="min-h-screen bg-background font-josefin">
      <Navigation />
      
      <main>
        <HeroSection />
        <BrandHighlight />
        
        {/* What We Do */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full shadow-soft mb-6">
                <p className="text-3xl font-bold text-accent-foreground uppercase tracking-wide">
                  Strategic Storytelling That Sounds Like You.
                </p>
              </div>
              <div className="prose prose-lg mx-auto text-foreground mb-12">
                <p className="text-lg leading-relaxed mb-6">
                  At Vivid Narrative, we don't just write content — we translate your voice, values, and vision 
                  into engaging storytelling that sparks connection and builds lasting credibility.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  For founders, CEOs, consultants, and ambitious professionals, we offer more than words. We offer 
                  clarity—the kind that aligns your online presence with your real-world brilliance, helping you 
                  show up with intention, influence, and authenticity.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you're scaling your brand, entering new markets, or simply ready to be seen as the expert 
                  you are, we help you lead the conversation with content that feels unmistakably you.
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center text-foreground">
                    <span className="text-primary mr-3 text-lg">✦</span>
                    <span className="font-josefin font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
<section className="py-16 bg-gradient-to-b from-secondary/10 to-primary/10">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full shadow-soft mb-6">
        <p className="text-3xl font-bold text-accent-foreground uppercase tracking-wide">
          Why choose Vivid Narrative?
        </p>
      </div>
      <p className="text-xl text-foreground font-josefin">
        Because You Deserve More Than Generic Content
      </p>
    </div>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {whyChoosePoints.map((point, index) => (
        <div
          key={index}
          className={`p-4 transition-opacity duration-300 delay-${index * 100} ${
            index % 2 === 0
              ? 'bg-gradient-to-r from-secondary/20 to-secondary/10'
              : 'bg-gradient-to-r from-secondary/10 to-secondary/20'
          } rounded-lg shadow-soft border-4 border-primary h-full`}
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <span className={`text-2xl ${point.icon} text-primary mr-4`}></span>
              <h3 className="text-lg font-josefin font-bold text-primary">
                {point.title}
              </h3>
            </div>
            <p className="text-foreground leading-relaxed font-josefin">
              {point.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    
    <div className="text-center">
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="premium" size="lg" asChild>
          <Link to="/contact">→ Build Your Narrative</Link>
        </Button>
        <Button variant="elegant" size="lg" asChild>
          <Link to="/services">→ Explore Our Services</Link>
        </Button>
      </div>
    </div>
  </div>
</section>

        {/* How It Works */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full shadow-soft mb-6">
                <p className="text-2xl font-bold text-accent-foreground uppercase tracking-wide">
                  How it works
                </p>
              </div>
              <p className="text-xl text-foreground font-josefin">
                Your Story. Our Strategy. Their Attention
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-josefin font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-josefin font-semibold text-foreground mb-4">
                    Step {step.number} – {step.title}
                  </h3>
                  <p className="text-foreground leading-relaxed font-josefin">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="premium" size="lg" asChild>
                <Link to="/contact">→ Begin Your Journey</Link>
              </Button>
            </div>
          </div>
        </section>

        <TestimonialsSection />

        {/* Services Preview */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-secondary/10">
          <div className="container mx-auto px-6 text-center">
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full shadow-soft mb-6">
                <p className="text-2xl font-bold text-accent-foreground uppercase tracking-wide">
                  Powerful Branding, Flexible Plans
                </p>
              </div>
            <p className="text-xl text-primary font-josefin mb-12 max-w-3xl mx-auto">
              From one-time strategy plans to ongoing content retainers and custom add-ons, we offer 
              flexible options designed to meet you exactly where you are—and scale as you grow.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="text-xl font-josefin font-semibold text-foreground mb-4">
                  One-Time Strategy Plan
                </h3>
                <p className="text-2xl font-josefin font-bold text-primary mb-2">Starts at $500</p>
                <p className="text-foreground font-josefin">
                  Foundation audit and strategic roadmap
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="text-xl font-josefin font-semibold text-foreground mb-4">
                  Monthly Retainers
                </h3>
                <p className="text-2xl font-josefin font-bold text-primary mb-2">From $800/month</p>
                <p className="text-foreground font-josefin">
                  Silver & Gold ongoing content plans
                </p>
              </div>
              
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <h3 className="text-xl font-josefin font-semibold text-foreground mb-4">
                  Add-ons & Custom
                </h3>
                <p className="text-2xl font-josefin font-bold text-primary mb-2">Custom Pricing</p>
                <p className="text-foreground font-josefin">
                  Website, PR coaching, social management
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="lg" asChild>
                <Link to="/contact">→ Get Your Custom Quote</Link>
              </Button>
              <Button variant="elegant" size="lg" asChild>
                <Link to="/services">→ Explore Services Details</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer /> 
    </div>
  );
};

export default Index;