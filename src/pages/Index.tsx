
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import PortfolioShowcase from '@/components/WhatWeBuild';
import WhoItsFor from '@/components/WhoItsFor';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ValueProposition />
        <PortfolioShowcase />
        <WhoItsFor />
        <HowItWorks />
        <Pricing />
        <CallToAction />
      </main>
      
      <footer className="bg-card py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <img 
                  src="/lovable-uploads/146d7168-f2fc-499a-b964-2e9a10ea3aa5.png" 
                  alt="Pentridge Media" 
                  className="h-16"
                />
              </a>
              <p className="text-muted mt-2">Your Partner in AI-Powered Productivity</p>
            </div>
            <div className="text-sm text-muted">
              © {new Date().getFullYear()} Pentridge Media. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
