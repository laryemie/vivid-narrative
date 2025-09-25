import React, { useState, useRef } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    goals: "",
    helpNeeded: [] as string[],
    timeline: "",
    budget: "",
    additional: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          'service_c9fnkn1', // Replace with your EmailJS Service ID
          'template_bxni1q9', // Replace with your EmailJS Template ID
          form.current,
          'C07tHoT3yi_KIPrlU' // Replace with your EmailJS Public Key
        )
        .then(
          (result) => {
            console.log('Success:', result.text);
            toast({
              title: "Form Submitted Successfully!",
              description: "Redirecting to schedule your discovery call...",
            });
            setFormData({
              fullName: "",
              email: "",
              role: "",
              goals: "",
              helpNeeded: [],
              timeline: "",
              budget: "",
              additional: "",
            });
            setTimeout(() => {
              window.location.href = "https://calendly.com/thevividnarrative/30min";
            }, 1500);
          },
          (error) => {
            console.log('Error:', error.text);
            toast({
              title: "Submission Failed",
              description: "Please try again later.",
              variant: "destructive",
            });
          }
        );
    }
  };

  const helpOptions = [
    "Brand Strategy only",
    "Monthly Done-for-you Content",
    "Online Profile Optimization",
    "Full Personal Brand Makeover",
    "Everything listed",
    "Not Sure Yet",
  ];

  const budgetOptions = [
    "✅ Yes — I'm prepared to invest.",
    "❌ No — I'm not at that stage yet.",
    "💬 I’m interested but have a different budget.",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-fly-in">
              <img
                src="/favicon.ico"
                alt="Vivid Narrative Favicon"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/48?text=Favicon";
                }}
              />
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-josefin font-bold text-primary leading-tight">
                Get In Touch With Us
              </h1>
            </div>
          </div>
        </section>
        {/* Contact Options */}
        <section className="py-10 sm:py-14 md:py-20 bg-gradient-to-b from-secondary/10 to-primary/10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-2xl mx-auto mb-8 sm:mb-12 text-center">
              <p className="text-base sm:text-lg md:text-xl font-josefin text-primary/90 leading-relaxed">
                Let’s craft your personal brand story. Book a call or fill out the form below to get started.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
              {/* Discovery Call */}
              <div className="bg-background rounded-2xl p-6 md:p-8 shadow-soft text-center flex flex-col justify-between">
                <h3 className="text-lg md:text-xl font-josefin font-bold text-foreground mb-4">
                  Free, No-Pressure 30-Minute Session
                </h3>
                <p className="text-foreground/90 text-sm sm:text-base mb-6">
                  Let's discuss your goals, challenges, and next steps for building a compelling and consistent personal brand.
                </p>
                <Link
                  to="https://calendly.com/thevividnarrative/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full rounded-full px-6 py-3 text-sm sm:text-base">
                    Book Now
                  </Button>
                </Link>
              </div>
              {/* Email */}
              <div className="bg-background rounded-2xl p-6 md:p-8 shadow-soft text-center">
                <h3 className="text-lg md:text-xl font-josefin font-bold text-foreground mb-4">
                  Prefer to write first?
                </h3>
                <p className="text-foreground/90 text-sm sm:text-base mb-4">
                  Email us directly with your questions or project details—we typically reply within 24–48 hours.
                </p>
                <a
                  href="mailto:hello@vividnarrative.com"
                  className="text-primary hover:text-primary/80 font-semibold text-sm sm:text-base"
                >
                  hello@vividnarrative.com
                </a>
              </div>
              {/* Global */}
              <div className="bg-background rounded-2xl p-6 md:p-8 shadow-soft text-center">
                <h3 className="text-lg md:text-xl font-josefin font-bold text-foreground mb-4">
                  🗺️ Global, Remote & Personal
                </h3>
                <p className="text-foreground/90 text-sm sm:text-base">
                  We partner with professionals worldwide. Wherever you are, our process is seamless and fully virtual.
                </p>
              </div>
            </div>
            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-background rounded-3xl p-6 sm:p-8 md:p-12 shadow-soft">
                <h2 className="text-2xl md:text-3xl font-josefin font-bold text-center text-foreground mb-8">
                  Build Your Narrative
                </h2>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                  {/* Full Name */}
                  <div>
                    <label className="text-sm font-semibold block mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="h-12 text-base"
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="text-sm font-semibold block mb-2">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="h-12 text-base"
                    />
                  </div>
                  {/* Role */}
                  <div>
                    <label className="text-sm font-semibold block mb-2">
                      Current Role/Title *
                    </label>
                    <Input
                      name="role"
                      required
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="h-12 text-base"
                      placeholder="e.g., CEO, Founder, Consultant"
                    />
                  </div>
                  {/* Goals */}
                  <div>
                    <label className="text-sm font-semibold block mb-2">
                      What Are You Hoping to Achieve? *
                    </label>
                    <Input
                      name="goals"
                      required
                      value={formData.goals}
                      onChange={(e) =>
                        setFormData({ ...formData, goals: e.target.value })
                      }
                      className="h-12 text-base"
                      placeholder="e.g., Visibility, Sales, Authority"
                    />
                  </div>
                  {/* Help Needed */}
                  <div>
                    <label className="text-sm font-semibold block mb-4">
                      Where Do You Need the Most Help?
                    </label>
                    <input
                      type="hidden"
                      name="helpNeeded"
                      value={formData.helpNeeded.join(', ')}
                    />
                    <div className="space-y-3">
                      {helpOptions.map((option) => (
                        <div key={option} className="flex items-center gap-3">
                          <Checkbox
                            id={option}
                            checked={formData.helpNeeded.includes(option)}
                            onCheckedChange={(checked) => {
                              setFormData({
                                ...formData,
                                helpNeeded: checked
                                  ? [...formData.helpNeeded, option]
                                  : formData.helpNeeded.filter((item) => item !== option),
                              });
                            }}
                            className="h-5 w-5"
                          />
                          <label htmlFor={option} className="text-sm text-foreground">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Timeline */}
                  <div>
                    <label className="text-sm font-semibold block mb-2">
                      Ideal Start Timeline?
                    </label>
                    <Select
                      name="timeline"
                      onValueChange={(value) =>
                        setFormData({ ...formData, timeline: value })
                      }
                    >
                      <SelectTrigger className="h-12 text-sm">
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
                  {/* Budget */}
                  <div>
                    <label className="text-sm font-semibold block mb-4">
                      Our minimum engagement is $500. Are you ready to proceed? *
                    </label>
                    <input type="hidden" name="budget" value={formData.budget} />
                    <div className="space-y-3">
                      {budgetOptions.map((option) => (
                        <div key={option} className="flex items-center gap-3">
                          <input
                            type="radio"
                            id={option}
                            name="budget_radio" // Separate name to avoid form submission conflict
                            value={option}
                            checked={formData.budget === option}
                            onChange={(e) =>
                              setFormData({ ...formData, budget: e.target.value })
                            }
                            className="h-5 w-5 text-primary"
                            required
                          />
                          <label htmlFor={option} className="text-sm text-foreground">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Additional Notes */}
                  <div>
                    <label className="text-sm font-semibold block mb-2">
                      Anything Else? (Optional)
                    </label>
                    <Textarea
                      name="additional"
                      value={formData.additional}
                      onChange={(e) =>
                        setFormData({ ...formData, additional: e.target.value })
                      }
                      placeholder="Tell us more about your goals, challenges, or questions..."
                      rows={4}
                      className="text-base"
                    />
                  </div>
                  {/* Submit */}
                  <Button
                    type="submit"
                    className="w-full rounded-full px-6 py-3 text-sm sm:text-base"
                  >
                    Submit & Schedule Call
                  </Button>
                  <p className="text-xs sm:text-sm text-muted-foreground text-center mt-4">
                    👉 After submitting, you’ll be redirected to our calendar to pick your call time immediately.
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