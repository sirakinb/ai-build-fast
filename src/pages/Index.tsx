
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import WhatWeBuild from '@/components/WhatWeBuild';
import WhoItsFor from '@/components/WhoItsFor';
import HowItWorks from '@/components/HowItWorks';
import LimitedSpotsBanner from '@/components/LimitedSpotsBanner';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ValueProposition />
        <WhatWeBuild />
        <WhoItsFor />
        <HowItWorks />
        <LimitedSpotsBanner />
        <CallToAction />
      </main>
      
      <footer className="bg-card py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-xl font-semibold text-white">BuildWithAI</a>
              <p className="text-muted mt-2">Turn ideas into reality with AI</p>
            </div>
            <div className="text-sm text-muted">
              © {new Date().getFullYear()} BuildWithAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
