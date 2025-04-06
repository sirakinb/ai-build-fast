
import React from 'react';
import { Sparkles, Zap, Users } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section id="value-prop" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            We help entrepreneurs and service businesses turn ideas into MVPs and bottlenecks into automated workflows—using AI and no-code tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-lift">
            <div className="h-12 w-12 bg-purple-light rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-purple" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Build in weeks, not months</h3>
            <p className="text-gray-600">
              Get your MVP or automation workflow up and running quickly without lengthy development cycles.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-lift">
            <div className="h-12 w-12 bg-purple-light rounded-lg flex items-center justify-center mb-6">
              <Sparkles className="h-6 w-6 text-purple" />
            </div>
            <h3 className="text-lg font-semibold mb-3">AI-powered, human-guided</h3>
            <p className="text-gray-600">
              Leverage the latest AI tools with expert guidance to ensure your solution meets your specific needs.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover-lift">
            <div className="h-12 w-12 bg-purple-light rounded-lg flex items-center justify-center mb-6">
              <Users className="h-6 w-6 text-purple" />
            </div>
            <h3 className="text-lg font-semibold mb-3">No dev team required</h3>
            <p className="text-gray-600">
              Skip the expensive hiring process and maintenance costs of a full development team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
