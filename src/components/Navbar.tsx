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
              className="h-14"
            />
          </a>
          
          <a 
            href="https://cal.com/akinyemi-bajulaiye-2jua88/30min-copy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              Schedule A Call
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
