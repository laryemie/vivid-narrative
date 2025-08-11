import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function FAQSection() {
  const faqs = [
    {
      question: "Who is Vivid Narrative for?",
      answer: "For ambitious professionals — CEOs, founders, consultants, creatives, and experts — who want to build a visible, voice-aligned brand without sounding like everyone else online."
    },
    {
      question: "Will the content really sound like me?",
      answer: "Yes. Voice-matching is our signature strength. We study your tone, phrasing, values, and communication style — then mirror it with clarity and strategy."
    },
    {
      question: "What makes Vivid Narrative different from content agencies or freelancers?",
      answer: "We're not a content factory. We don't churn. We partner. Everything we create is shaped by deep listening, brand strategy, and your personal tone, so the result feels authentic and performs with purpose."
    },
    {
      question: "What if I already have a personal brand but need to refine it?",
      answer: "Perfect. We specialize in helping professionals evolve their voice, clarify their message, and reposition their presence for the next level of growth."
    },
    {
      question: "How long does it take to get results?",
      answer: "Personal branding is a long game, but our clients typically see clarity, improved engagement, and greater confidence in as little as 30–60 days. With consistent execution, the long-term results extend far beyond content metrics, encompassing trust, referrals, opportunities, and influence."
    },
    {
      question: "Is there a minimum commitment?",
      answer: "For one-time strategy plans, there's no minimum beyond the initial project. For retainers, we recommend a minimum 3-month commitment to see compounding results, but you can cancel with 14 days' notice."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "Client satisfaction is our priority. If you're unhappy with any deliverable, we'll revise until it meets your expectations—or work with you on a solution that feels right."
    },
    {
      question: "What are your pricing options?",
      answer: "Our services start at $500. Pricing depends on your chosen plan (one-time, retainer, or add-ons), scope of work, and goals. You'll find more details on our <a href='/services' className='text-primary'>Services page</a>. Need a custom quote? Book a Discovery Call or email us at <a href='mailto:hello@vividnarrative.com' className='text-primary'>hello@vividnarrative.com</a>."
    },
    {
      question: "Do I need to be active on all platforms?",
      answer: "Not at all. We help you identify the most strategic platforms for your audience and goals. Then we craft a content approach that fits your capacity, voice, and strengths."
    },
    {
      question: "What if I don't know what to say yet?",
      answer: "That's our job. Through discovery calls, voice profiling, and strategy mapping, we help you clarify your narrative and turn it into content that works."
    },
    {
      question: "How do I get started?",
      answer: "Easy. Book a free 30-minute Discovery Call. It's a low-pressure conversation to explore your needs and see if we're a good fit."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/10 to-primary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full shadow-soft mb-6">
                <p className="text-2xl font-bold text-accent-foreground uppercase tracking-wide">
                  Frequently asked questions
                </p>
              </div>
          <p className="text-lg text-foreground">
            Curious About Vivid Narrative?
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-md border border-gray-100 hover:bg-white/70 transition-all duration-200"
              >
                <AccordionTrigger className="text-left text-sm font-josefin font-medium text-foreground hover:text-primary flex items-center">
                  <span className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center mr-2">
                    <i className="fas fa-question text-primary text-xs"></i>
                  </span>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pt-2 pb-3">
                  <p className="font-josefin" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <Button variant="premium" size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90">
            <Link to="/contact">→ Book Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}