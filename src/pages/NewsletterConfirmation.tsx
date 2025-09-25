import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

export default function NewsletterConfirmation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <img
              src="/vivid-narrative-uploads/Purple.png"
              alt="Vivid Narrative Logo"
              className="mx-auto mb-6 w-48 sm:w-64 h-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://via.placeholder.com/200x50?text=Logo';
              }}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-josefin font-bold text-primary mb-4">
              Subscription Confirmed!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto">
              You've successfully signed up for the Vivid Narrative newsletter. Get ready for the latest insights and offerings to amplify your personal brand!
            </p>
            <Link to="/">
              <Button
                className="rounded-full px-6 py-3 text-sm sm:text-base bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary/80"
              >
                Back to Home
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}