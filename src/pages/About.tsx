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
      icon: 'fa-user' // Icon for Authenticity
    },
    {
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards—delivering flawless content, every time.',
      icon: 'fa-star' // Icon for Excellence
    },
    {
      title: 'Empowerment',
      description: 'We give you the tools and confidence to own your narrative and lead with conviction.',
      icon: 'fa-handshake' // Icon for Empowerment
    },
    {
      title: 'Strategic Impact',
      description: 'We align every story and post with clear objectives that move your brand forward.',
      icon: 'fa-bullseye' // Icon for Strategic Impact
    },
    {
      title: 'Inclusivity',
      description: 'We craft culturally intelligent storytelling that resonates locally and globally.',
      icon: 'fa-globe' // Icon for Inclusivity
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with Background Image */}
        <section className="py-20 bg-[url('/vivid-narrative-uploads/about.jpg')] bg-cover bg-center mx-auto px-6 relative min-h-[400px] z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-primary/10 z-0"></div>

          <h1 className="text-6xl font-bold text-secondary uppercase text-center tracking-wide">
                Our Story
              </h1>
          
        </section>

        {/* Story Content */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-secondary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="prose prose-lg mx-auto text-foreground">
              <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
            
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full shadow-soft mb-6">
              <p className="text-2xl font-bold text-accent-foreground uppercase tracking-wide">
                Our Story at Vivid Narrative
              </p>
            </div>
            <p className="text-lg md:text-xl font-josefin text-foreground mb-6 max-w-2xl">
              Discover the journey and values driving us to empower your personal brand.
            </p>
          </div>
                <p className="text-lg leading-relaxed mb-8">
                  The idea for Vivid Narrative began with a simple yet powerful insight: brilliant professionals 
                  often struggle to communicate their true value online. They have the expertise, vision, and 
                  drive—but their voices often get lost in generic content or buried beneath inconsistent messaging.
                  Working with clients across various industries, we validated that the problem wasn't talent, 
                  but rather storytelling. So we built a different kind of agency: one founded on the belief 
                  that your narrative is your edge.
                </p>
                
                <div className="bg-gradient-to-r from-secondary/80 to-secondary/40 rounded-2xl p-8 my-12 shadow-soft">
                  <p className="text-xl font-semibold text-center mb-4">
                    <span className="text-primary font-bold font-josefin">Vivid</span> stands for clarity and memorability.
                  </p>
                  <p className="text-xl font-semibold text-center">
                    <span className="text-primary font-bold font-josefin">Narrative</span> grounds us in purpose and the power of a story told right.
                  </p>
                </div>
                
                <p className="text-lg leading-relaxed mb-8">
                  Today, we partner with CEOs, founders, coaches, freelancers, and rising professionals to 
                  amplify their stories—not just for show, but for strategic impact. We deliver content that 
                  reflects your tone, truth, and trajectory; content that attracts the right opportunities, 
                  builds confidence, and drives meaningful influence.
                </p>
                
                <p className="text-lg leading-relaxed font-semibold text-primary">
                  Because at Vivid Narrative, we believe influence starts from within. And when you tell 
                  your story with intention, everything changes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gradient-to-b from-secondary/10 to-primary/10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full shadow-soft mb-6">
                <p className="text-2xl font-bold text-accent-foreground uppercase tracking-wide">
                  Our Core Values
                </p>
              </div>
              <p className="text-lg text-foreground mb-16">
                These principles guide every word we write, every strategy we design, and every partnership we forge:
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className={`p-4 transition-opacity duration-300 delay-${index * 100} ${
                      index % 2 === 0
                        ? 'bg-gradient-to-r from-secondary/20 to-secondary/10'
                        : 'bg-gradient-to-r from-secondary/10 to-secondary/20'
                    } rounded-lg shadow-soft border-4 border-primary h-full`}
                  >
                    <div className="text-center">
                      <i className={`fas ${value.icon} text-2xl text-primary mb-2`}></i>
                      <h3 className="text-lg font-josefin font-bold text-primary mb-4">
                        {value.title}
                      </h3>
                      <p className="text-foreground leading-relaxed">
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
        <section className="py-16 bg-gradient-to-b from-primary/10 to-secondary/10">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-display font-josefin font-bold text-foreground mb-8">
              Ready to Tell Your Story, Your Way?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's partner to create a personal brand that's unmistakably you—and impossible to ignore.
            </p>
            <Button variant="premium" size="xl" asChild>
              <Link to="/contact">Build Your Narrative →</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}