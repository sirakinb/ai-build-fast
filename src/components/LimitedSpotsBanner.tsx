
import React from 'react';
import { Rocket } from 'lucide-react';

const LimitedSpotsBanner = () => {
  return (
    <section className="bg-gray-800 py-8 md:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-white text-center md:text-left">
          <Rocket className="h-8 w-8 mb-4 md:mb-0 md:mr-6 text-primary" />
          <p className="text-xl md:text-2xl font-medium">
            Accepting 3–5 new builds this month
            <span className="block text-base mt-1 text-muted">
              (We keep it lean so we can move fast and go deep.)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitedSpotsBanner;
