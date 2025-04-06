
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
            Ready to Build with AI?
          </h1>
          <p className="text-xl md:text-2xl text-muted mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Whether it's a custom app or a smarter way to run your business—we can help you build it.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="bg-white text-background hover:bg-white/90"
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              href="#download"
            >
              Download Your Free Prompt Improving Tool
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
