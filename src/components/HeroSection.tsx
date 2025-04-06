
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden bg-[#0a0a0d]">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
            Build Your MVP Fast, Affordable, and <span className="text-[#646cff]">Stress-Free</span>
          </h1>
          <p className="text-lg md:text-xl text-[#a3a3b9] mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our AI-powered approach helps entrepreneurs and businesses turn ideas into reality in just a few weeks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              className="bg-[#646cff] text-white hover:bg-[#747bff] py-6 text-lg font-medium rounded-lg"
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule A Call
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 py-6 text-lg font-medium rounded-lg"
              onClick={() => window.location.href = "#download"}
            >
              Get Your Prompt Improver (Free AI Tool)
            </Button>
          </div>
          
          <div className="mt-16 flex justify-center">
            <div className="bg-white inline-flex rounded-full py-1 px-1">
              <button className="rounded-full px-4 py-1 text-sm bg-black text-white">Popular</button>
              <button className="rounded-full px-4 py-1 text-sm text-[#333]">New</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-[#1e1e24] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Rapid MVP Development</h2>
            <p className="text-lg text-gray-400">pentridgemedia.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
