
import React from 'react';
import { Rocket } from 'lucide-react';

const LimitedSpotsBanner = () => {
  return (
    <section className="w-full flex justify-center py-6">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-gradient-to-r from-[#1f2036]/80 to-[#292c4a]/80 backdrop-blur-sm rounded-full px-8 py-3 border border-white/10 shadow-lg text-center">
          <p className="text-xl font-medium text-white">
            Accepting 3–5 new builds this month
            <span className="block text-sm mt-0.5 text-white/70">
              (We keep it lean so we can move fast and go deep.)
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitedSpotsBanner;
