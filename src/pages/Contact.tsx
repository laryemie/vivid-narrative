import React, { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    goals: '',
    helpNeeded: [],
    timeline: '',
    budget: '',
    additional: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Form Submitted Successfully!",
      description: "We'll be in touch within 24-48 hours to schedule your discovery call.",
    });
  };

  const helpOptions = [
    'Brand Strategy only',
    'Monthly Done-for-you Content',
    'Online Profile Optimization',
    'Full Personal Brand Makeover',
    'Everything listed',
    'Not Sure Yet'
  ];

  const budgetOptions = [
    'Yes — I\'m prepared to invest.',
    'No — I\'m not at that stage yet.',
    'I\'m not sure yet'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section with Background Image */}
        <section className="py-16 bg-[url('/vivid-narrative-uploads/contact-form.jpg')] bg-cover bg-center mx-auto px-6 relative min-h-[400px] z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-primary/10 z-0"></div>
          
        </section>

        {/* Contact Options */}
        <section className="py-16 bg-gradient-to-b from-secondary/10 to-primary/10">
        <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
        <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/60 to-secondary/60 rounded-full shadow-soft mb-6">
                <p className="text-2xl font-bold text-accent-foreground uppercase tracking-wide">
                  Get In Touch With Us
                </p>
              </div>
            <p className="text-lg md:text-xl font-josefin text-primary/90 mb-6 max-w-2xl">
              Let’s craft your personal brand story. Book a call or fill out the form below to get started.
            </p>
            
          </div>
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12 mb-20">
              {/* Discovery Call */}
              <div className="bg-background rounded-2xl p-8 shadow-soft text-center">
                <h3 className="text-xl font-josefin font-bold text-foreground mb-4">
                  Free, No-Pressure 30-Minute Session
                </h3>
                <p className="text-foreground mb-6">
                  Let's discuss your goals, challenges, and next steps for building a compelling and consistent personal brand.
                </p>
                <Link
                  to="https://calendly.com/koyum-vividnarrative/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button variant="premium" className="w-full">
                    Book Now
                  </Button>
                </Link>
              </div>

              {/* Email */}
              <div className="bg-background rounded-2xl p-8 shadow-soft text-center">
                <h3 className="text-xl font-josefin font-bold text-foreground mb-4">
                  Prefer to write first?
                </h3>
                <p className="text-foreground mb-6">
                  Email us directly with your questions or project details—we typically reply within 24–48 hours.
                </p>
                <a 
                  href="mailto:hello@vividnarrative.com"
                  className="text-primary hover:text-primary/80 font-josefin font-semibold"
                >
                  hello@vividnarrative.com
                </a>
              </div>

              {/* Global */}
              <div className="bg-background rounded-2xl p-8 shadow-soft text-center">
                <h3 className="text-xl font-josefin font-bold text-foreground mb-4">
                  🗺️ Global, Remote & Personal
                </h3>
                <p className="text-foreground">
                  We partner with professionals around the world. Wherever you are, our process is seamless and fully virtual.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-background rounded-3xl p-12 shadow-soft">
                <h2 className="text-2xl font-josefin font-bold text-center text-foreground mb-8">
                  Build Your Narrative
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-sm font-josefin font-semibold text-foreground mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-josefin font-semibold text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-josefin font-semibold text-foreground mb-2 block">
                      Current Role/Title (CEO, Founder, Consultant, etc.) *
                    </label>
                    <Input
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="h-12"
                      placeholder="e.g., CEO, Founder, Consultant"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-josefin font-semibold text-foreground mb-2 block">
                      What Are You Hoping to Achieve? *
                    </label>
                    <Input
                      required
                      value={formData.goals}
                      onChange={(e) => setFormData({...formData, goals: e.target.value})}
                      className="h-12"
                      placeholder="e.g., Visibility, Business Sales, Authority"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-josefin font-semibold text-foreground mb-4 block">
                      Where Do You Need the Most Help? (Select all that apply)
                    </label>
                    <div className="space-y-3">
                      {helpOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-3">
                          <Checkbox
                            id={option}
                            checked={formData.helpNeeded.includes(option)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  helpNeeded: [...formData.helpNeeded, option]
                                });
                              } else {
                                setFormData({
                                  ...formData,
                                  helpNeeded: formData.helpNeeded.filter(item => item !== option)
                                });
                              }
                            }}
                          />
                          <label htmlFor={option} className="text-sm font-josefin text-foreground">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-josefin font-semibold text-foreground mb-2 block">
                      Ideal Start Timeline?
                    </label>
                    <Select onValueChange={(value) => setFormData({...formData, timeline: value})}>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediately">Immediately</SelectItem>
                        <SelectItem value="1-3-weeks">1–3 weeks</SelectItem>
                        <SelectItem value="1-2-months">1–2 months</SelectItem>
                        <SelectItem value="exploring">Just Exploring</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-josefin font-semibold text-foreground mb-4 block">
                      Our minimum engagement is $500. Are you ready to proceed if there's a fit? *
                    </label>
                    <div className="space-y-3">
                      {budgetOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-3">
                          <input
                            type="radio"
                            id={option}
                            name="budget"
                            value={option}
                            checked={formData.budget === option}
                            onChange={(e) => setFormData({...formData, budget: e.target.value})}
                            className="text-primary"
                            required
                          />
                          <label htmlFor={option} className="text-sm font-josefin text-foreground">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-josefin font-semibold text-foreground mb-2 block">
                      Anything Else You'd Like Us to Know? (Optional)
                    </label>
                    <Textarea
                      value={formData.additional}
                      onChange={(e) => setFormData({...formData, additional: e.target.value})}
                      placeholder="Tell us more about your goals, challenges, or questions..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="premium" size="lg" className="w-full">
                    Submit & Schedule Call
                  </Button>

                  <p className="text-xs font-josefin text-muted-foreground text-center">
                    👉 After submit: You'll be automatically forwarded to our calendar to pick your call time immediately.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}