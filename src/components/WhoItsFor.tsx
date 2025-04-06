
import React from 'react';
import { ArrowRight } from 'lucide-react';

const comparisonItems = [
  {
    old: "Long timelines before anything functional",
    new: "MVPs delivered in weeks, workflows in days"
  },
  {
    old: "High agency fees + bloated teams",
    new: "Lean, AI-augmented team focused on outcomes"
  },
  {
    old: "Endless planning + documentation",
    new: "Rapid prototyping + clear, working logic early"
  },
  {
    old: "$10K–$30K upfront before real validation",
    new: "Affordable MVPs and automations that scale"
  },
  {
    old: "Complex tools and tech stacks",
    new: "No-code builds with modern, maintainable tech"
  }
];

const WhoItsFor = () => {
  return (
    <section id="who-its-for" className="py-16 md:py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-white">Welcome to the Build With AI Movement</h2>
          
          <p className="text-xl text-white/80 max-w-4xl mx-auto mb-10 text-center">
            We're at a turning point. The old way of building was slow, expensive, and complicated.
            Now? You can build smarter, faster, and leaner—with AI.
          </p>
          
          <div className="border border-border rounded-xl overflow-hidden bg-card/30 shadow-md hover-lift">
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-card/70 border-b border-border">
              <div className="p-5 text-xl font-semibold text-white border-r border-border">The Old Way</div>
              <div className="p-5 text-xl font-semibold text-white text-right">The New Way (Build With AI)</div>
            </div>
            
            {/* Table Body */}
            {comparisonItems.map((item, index) => (
              <div key={index} className={`grid grid-cols-12 ${index !== comparisonItems.length - 1 ? 'border-b border-border' : ''}`}>
                <div className="col-span-5 p-5 text-muted flex items-center">{item.old}</div>
                <div className="col-span-2 flex items-center justify-center border-x border-border">
                  <ArrowRight className="text-primary h-5 w-5" />
                </div>
                <div className="col-span-5 p-5 text-white flex items-center justify-end text-right">{item.new}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
