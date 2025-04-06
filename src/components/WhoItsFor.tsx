
import React from 'react';
import { Check } from 'lucide-react';

const WhoItsFor = () => {
  const items = [
    'Have a product or app idea you\'ve been sitting on',
    'Run a business and want to save time or streamline a process',
    'Want to explore how AI can actually help you—not just confuse you',
    'Need a partner who can bring the tools and the vision'
  ];

  return (
    <section id="who-its-for" className="py-16 md:py-24 bg-gradient-to-b from-white to-purple-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">This is for you if you:</h2>
          
          <ul className="space-y-6">
            {items.map((item, index) => (
              <li key={index} className="flex items-start animate-fade-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="h-6 w-6 rounded-full bg-purple flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <span className="ml-4 text-lg text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
