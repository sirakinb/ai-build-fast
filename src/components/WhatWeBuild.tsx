
import React from 'react';
import { RocketIcon, GitMergeIcon } from 'lucide-react';

const WhatWeBuild = () => {
  return (
    <section id="what-we-build" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">What We Build</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="featured-item">
          <div className="flex items-start">
            <div className="h-10 w-10 bg-purple-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <RocketIcon className="h-5 w-5 text-purple" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-3">MVPs</h3>
              <p className="text-gray-600">
                For founders or creators who have an idea and need a version 1—fast.
              </p>
            </div>
          </div>
        </div>
        
        <div className="featured-item">
          <div className="flex items-start">
            <div className="h-10 w-10 bg-purple-light rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <GitMergeIcon className="h-5 w-5 text-purple" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold mb-3">Automated Workflows</h3>
              <p className="text-gray-600">
                For business operators who want to eliminate bottlenecks and save time using AI-powered automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBuild;
