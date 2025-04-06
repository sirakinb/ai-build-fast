
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-xl font-semibold gradient-text">BuildWithAI</a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#value-prop" className="text-gray-600 hover:text-purple transition-colors">Why Us</a>
            <a href="#what-we-build" className="text-gray-600 hover:text-purple transition-colors">Solutions</a>
            <a href="#who-its-for" className="text-gray-600 hover:text-purple transition-colors">For You</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple transition-colors">Process</a>
          </nav>
          
          <Button 
            variant="outline" 
            className="hidden md:inline-flex border-purple text-purple hover:bg-purple-light hover:text-purple-dark"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk
          </Button>
          
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
