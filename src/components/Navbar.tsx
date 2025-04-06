
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/lovable-uploads/146d7168-f2fc-499a-b964-2e9a10ea3aa5.png" 
              alt="Pentridge Media" 
              className="h-10"
            />
          </a>
          
          <Button 
            variant="outline" 
            className="border border-white/20 text-white hover:bg-white/10 rounded-full"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Schedule A Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
