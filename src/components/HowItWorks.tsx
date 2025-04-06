
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Fill out the form',
      description: 'Tell us what you're looking to build'
    },
    {
      number: 2,
      title: 'Strategy session',
      description: 'We'll map out your options'
    },
    {
      number: 3,
      title: 'We build',
      description: 'You get an MVP or automated workflow delivered fast'
    }
  ];

  return (
    <section id="how-it-works" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How It Works</h2>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute left-12 inset-y-0 w-0.5 bg-purple-light md:block hidden"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row md:items-center">
                <div className="flex-shrink-0 md:w-24 mb-6 md:mb-0">
                  <div className="h-12 w-12 rounded-full bg-purple flex items-center justify-center text-white font-bold text-xl z-10 relative">
                    {step.number}
                  </div>
                </div>
                <div className="bg-white md:ml-4 p-6 rounded-xl shadow-sm border border-gray-100 hover-lift flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
