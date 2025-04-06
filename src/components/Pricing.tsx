
import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Choose Your Build Package
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Select the perfect solution for your needs and get started today
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* MVP Development Package */}
          <div className="relative rounded-xl overflow-hidden border border-[#2A2D3E] bg-card/50 flex flex-col">
            <div className="px-6 pt-12 pb-8 flex-grow">
              <div className="bg-black/20 inline-block px-4 py-1 rounded-full text-white mb-4">
                One time
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">MVP Development Package</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">Starting at $3,750</span>
                <p className="text-white/70 mt-1">Delivered in 4-5 weeks</p>
              </div>
              
              <div className="mt-8 mb-6">
                <h4 className="text-xl font-semibold text-white mb-6">What's Included:</h4>
                <ul className="space-y-4">
                  {[
                    "Full MVP build using AI + no-code tools",
                    "Web application or mobile app",
                    "4–5 week turnaround",
                    "Modern tech stack",
                    "Founder-led development",
                    "Transparent process"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="px-6 pb-8 mt-auto">
              <Button className="w-full bg-white hover:bg-white/90 text-background">
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Automated Workflow Package */}
          <div className="rounded-xl overflow-hidden border border-[#2A2D3E] bg-card/50 flex flex-col">
            <div className="px-6 pt-12 pb-8 flex-grow">
              <div className="bg-white/10 inline-block px-4 py-1 rounded-full text-white mb-4">
                Quick turnaround
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Automated Workflow Package</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">Starting at $1,800</span>
                <p className="text-white/70 mt-1">Delivered in 7–10 days</p>
              </div>
              
              <div className="mt-8 mb-6">
                <h4 className="text-xl font-semibold text-white mb-6">What's Included:</h4>
                <ul className="space-y-4">
                  {[
                    "Custom automated workflows tailored to your business",
                    "SOPs + video documentation provided with delivery",
                    "Designed to eliminate bottlenecks, streamline backend operations",
                    "Weekly strategy sessions",
                    "Ongoing support and optimization"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="px-6 pb-8 mt-auto">
              <Button className="w-full bg-white hover:bg-white/90 text-background">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
