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
    additional: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted Successfully!",
      description: "Redirecting to schedule your discovery call...",
    });
    setFormData({
      fullName: '',
      email: '',
      role: '',
      goals: '',
      helpNeeded: [],
      timeline: '',
      budget: '',
      additional: '',
    });
    setTimeout(() => {
      window.location.href = 'https://calendly.com/koyum-vividnarrative/30min';
    }, 1500);
  };

  const helpOptions = [
    'Brand Strategy only',
    'Monthly Done-for-you Content',
    'Online Profile Optimization',
    'Full Personal Brand Makeover',
    'Everything listed',
    'Not Sure Yet',
  ];

  const budgetOptions = [
    "✅ Yes — I'm prepared to invest.",
    "❌ No — I'm not at that stage yet.",
    "💬 I’m interested but have a different budget.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center justify-center space-x-4 sm:space-x-6 animate-fly-in">
              <img
                src="/favicon.ico"
                alt="Vivid Narrative Favicon"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/48?text=Favicon';
                }}
              />
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-josefin font-bold text-primary">
                Get In Touch With Us
              </h1>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-secondary/10 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16">
              <p className="text-base sm:text-lg md:text-xl font-josefin text-primary/90 text-center">
                Let’s craft your personal brand story. Book a call or fill out the form below to get started.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
              {/* Discovery Call */}
              <div className="bg-background rounded-2xl p-4 sm:p-6 md:p-8 shadow-soft text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-josefin font-bold text-foreground mb-2 sm:mb-4">
                  Free, No-Pressure 30-Minute Session
                </h3>
                <p className="text-foreground text-sm sm:text-base mb-4 sm:mb-6">
                  Let's discuss your goals, challenges, and next steps for building a compelling and consistent personal brand.
                </p>
                <Link
                  to="https://calendly.com/koyum-vividnarrative/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full"
                >
                  <Button variant="premium" className="w-full text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2">
                    Book Now
                  </Button>
                </Link>
              </div>

              {/* Email */}
              <div className="bg-background rounded-2xl p-4 sm:p-6 md:p-8 shadow-soft text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-josefin font-bold text-foreground mb-2 sm:mb-4">
                  Prefer to write first?
                </h3>
                <p className="text-foreground text-sm sm:text-base mb-4 sm:mb-6">
                  Email us directly with your questions or project details—we typically reply within 24–48 hours.
                </p>
                <a
                  href="mailto:hello@vividnarrative.com"
                  className="text-primary hover:text-primary/80 font-josefin font-semibold text-sm sm:text-base"
                >
                  hello@vividnarrative.com
                </a>
              </div>

              {/* Global */}
              <div className="bg-background rounded-2xl p-4 sm:p-6 md:p-8 shadow-soft text-center">
                <h3 className="text-base sm:text-lg md:text-xl font-josefin font-bold text-foreground mb-2 sm:mb-4">
                  🗺️ Global, Remote & Personal
                </h3>
                <p className="text-foreground text-sm sm:text-base">
                  We partner with professionals around the world. Wherever you are, our process is seamless and fully virtual.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-background rounded-3xl p-6 sm:p-8 md:p-12 shadow-soft">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-josefin font-bold text-center text-foreground mb-6 sm:mb-8">
                  Build Your Narrative
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  <div>
                    <label className="text-xs sm:text-sm font-josefin font-semibold text-foreground mb-1 sm:mb-2 block">
                      Full Name *
                    </label>
                    <Input
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-josefin font-semibold text-foreground mb-1 sm:mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-10 sm:h-12 text-sm sm:text-base"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-josefin font-semibold text-foreground mb-1 sm:mb-2 block">
                      Current Role/Title (CEO, Founder, Consultant, etc.) *
                    </label>
                    <Input
                      required
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="h-10 sm:h-12 text-sm sm:text-base"
                      placeholder="e.g., CEO, Founder, Consultant"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-josefin font-semibold text-foreground mb-1 sm:mb-2 block">
                      What Are You Hoping to Achieve? *
                    </label>
                    <Input
                      required
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      className="h-10 sm:h-12 text-sm sm:text-base"
                      placeholder="e.g., Visibility, Business Sales, Authority"
                    />
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-josefin font-semibold text-foreground mb-2 sm:mb-4 block">
                      Where Do You Need the Most Help? (Select all that apply)
                    </label>
                    <div className="space-y-2 sm:space-y-3">
                      {helpOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-3">
                          <Checkbox
                            id={option}
                            checked={formData.helpNeeded.includes(option)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  helpNeeded: [...formData.helpNeeded, option],
                                });
                              } else {
                                setFormData({
                                  ...formData,
                                  helpNeeded: formData.helpNeeded.filter((item) => item !== option),
                                });
                              }
                            }}
                            className="h-5 w-5"
                          />
                          <label htmlFor={option} className="text-xs sm:text-sm font-josefin text-foreground">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-josefin font-semibold text-foreground mb-2 sm:mb-4 block">
                      Ideal Start Timeline?
                    </label>
                    <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                      <SelectTrigger className="h-10 sm:h-12 text-xs sm:text-sm">
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
                    <label className="text-xs sm:text-sm font-josefin font-semibold text-foreground mb-2 sm:mb-4 block">
                      Our minimum engagement is $500. Are you ready to proceed if there's a fit? *
                    </label>
                    <div className="space-y-2 sm:space-y-3">
                      {budgetOptions.map((option) => (
                        <div key={option} className="flex items-center space-x-3">
                          <input
                            type="radio"
                            id={option}
                            name="budget"
                            value={option}
                            checked={formData.budget === option}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="h-5 w-5 text-primary"
                            required
                          />
                          <label htmlFor={option} className="text-xs sm:text-sm font-josefin text-foreground">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-josefin font-semibold text-foreground mb-1 sm:mb-2 block">
                      Anything Else You'd Like Us to Know? (Optional)
                    </label>
                    <Textarea
                      value={formData.additional}
                      onChange={(e) => setFormData({ ...formData, additional: e.target.value })}
                      placeholder="Tell us more about your goals, challenges, or questions..."
                      rows={4}
                      className="text-sm sm:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="premium"
                    size="lg"
                    className="w-full text-xs sm:text-sm md:text-base px-4 sm:px-6 py-2"
                  >
                    Submit & Schedule Call
                  </Button>

                  <p className="text-xs sm:text-sm font-josefin text-muted-foreground text-center mt-2 sm:mt-4">
                    👉 After submitting, you'll be redirected to our calendar to pick your call time immediately.
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