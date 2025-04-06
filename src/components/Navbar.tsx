
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-semibold gradient-text">BuildWithAI</a>
          
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
