import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden bg-[#0e0e16]">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
            Ready to Build with AI?
          </h1>
          <p className="text-xl md:text-2xl text-[#a3a3b9] mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Whether it's a custom app or automating your operations — we help you build faster and smarter with AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a 
              href="https://cal.com/akinyemi-bajulaiye-2jua88/30min-copy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                className="w-full bg-white text-[#0e0e16] hover:bg-white/90 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-lg"
              >
                Schedule A Call
              </Button>
            </a>
            <a 
              href="https://tally.so/r/3xzOJd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline" 
                className="w-full border-white text-white hover:bg-white/10 py-4 sm:py-6 text-base sm:text-lg font-medium rounded-lg"
              >
                <span className="sm:hidden">Free AI Tool: Prompt Improver</span>
                <span className="hidden sm:inline">Access The Prompt Improver (Free AI Tool)</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
