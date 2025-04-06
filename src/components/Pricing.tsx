
import React from 'react';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Ready to Ignite Your Idea?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Choose the perfect package for your project and get started today
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* MVP Development Package */}
          <div className="relative rounded-xl overflow-hidden border border-[#2A2D3E] bg-card/50">
            <div className="absolute top-0 left-0">
              <div className="bg-purple-500 text-white px-4 py-1 rounded-br-lg font-medium">
                Most Popular
              </div>
            </div>
            <div className="px-6 pt-12 pb-8">
              <div className="bg-black/20 inline-block px-4 py-1 rounded-full text-white mb-4">
                One time
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">MVP Development Package</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">Starting at $3497</span>
                <p className="text-red-400 mt-1">Limited spots - we only take 5 clients monthly.</p>
              </div>
              
              <div className="mt-8 mb-6">
                <h4 className="text-xl font-semibold text-white mb-6">What's Included:</h4>
                <ul className="space-y-4">
                  {[
                    "Complete MVP development in 4-5 weeks",
                    "Web application/ Mobile App",
                    "Modern, scalable tech stack",
                    "Seamless integrations (payments, auth, etc.)",
                    "30 days of free maintenance",
                    "Personalized, founder-led development",
                    "Regular updates and transparent process"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className="w-full bg-white hover:bg-white/90 text-background mt-4">
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Growth Retainer Package */}
          <div className="rounded-xl overflow-hidden border border-[#2A2D3E] bg-black">
            <div className="px-6 pt-12 pb-8">
              <div className="bg-white/10 inline-block px-4 py-1 rounded-full text-white mb-4">
                Monthly Retainer
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Growth Retainer Package</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">$3997/month</span>
                <p className="text-white/70 mt-1">No commitment, cancel anytime</p>
              </div>
              
              <div className="mt-8 mb-6">
                <h4 className="text-xl font-semibold text-white mb-6">Dedicated Monthly Services:</h4>
                <ul className="space-y-4">
                  {[
                    "60 hours of development time per month",
                    "Flexible hours allocation",
                    "Weekly strategy calls",
                    "Priority feature development",
                    "Continuous maintenance & optimization",
                    "Same-day emergency support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button className="w-full bg-white hover:bg-white/90 text-background mt-4">
                Get Started
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 text-center">
          <div className="inline-flex space-x-6 p-2 rounded-full bg-card/80 border border-[#2A2D3E]">
            {["How it works", "Our Approach", "Pricing", "Work", "Connect on X"].map((item, index) => (
              <button key={index} className={`px-4 py-2 rounded-full text-sm ${index === 4 ? 'bg-gray-500/30 text-white' : 'text-white/80 hover:text-white'}`}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
