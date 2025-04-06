
import React from 'react';
import { Laptop, Smartphone, Globe, Monitor } from 'lucide-react';

const PortfolioShowcase = () => {
  return (
    <section id="portfolio-showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            A peak into what we have built
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Below are some of the apps and workflows we've helped founders launch. They all had innovative ideas and we helped them convert them into reality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Project 1 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 border border-[#2A2D3E]">
              <img 
                src="/lovable-uploads/206a607a-5bd7-40c9-8172-3c934a047917.png" 
                alt="ProjectName.ai dashboard" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {["AI", "Productivity", "Mental Clarity", "Task Management"].map((tag, index) => (
                <span key={index} className={`px-4 py-1.5 rounded-full text-sm text-white ${index === 0 ? 'bg-[#13141F] border border-[#2A2D3E]' : 'bg-[#1E1F2E] border border-transparent'}`}>
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">ProjectName.ai</h3>
            
            <p className="text-gray-400 mt-1">
              An AI-powered productivity tool that transforms scattered thoughts into organized, actionable items.
            </p>
          </div>
          
          {/* Project 2 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 border border-[#2A2D3E]">
              <img 
                src="/lovable-uploads/106b236d-99b6-4b7c-a47d-9aefa63d5864.png" 
                alt="TravelApp mobile app" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {["Mobile App", "Social Networking", "Solo Travelers"].map((tag, index) => (
                <span key={index} className={`px-4 py-1.5 rounded-full text-sm text-white ${index === 0 ? 'bg-[#13141F] border border-[#2A2D3E]' : 'bg-[#1E1F2E] border border-transparent'}`}>
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">TravelApp</h3>
            
            <p className="text-gray-400 mt-1">
              A social travel app designed for solo travelers to connect, share experiences, and discover new destinations.
            </p>
          </div>
          
          {/* Project 3 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 border border-[#2A2D3E]">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="LearnAI study assistant" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {["AI", "EdTech", "Study Companion", "PDF/Video Analysis"].map((tag, index) => (
                <span key={index} className={`px-4 py-1.5 rounded-full text-sm text-white ${index === 0 ? 'bg-[#13141F] border border-[#2A2D3E]' : 'bg-[#1E1F2E] border border-transparent'}`}>
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">LearnAI</h3>
            
            <p className="text-gray-400 mt-1">
              A smart study assistant that helps users engage deeply with study materials like PDFs and videos.
            </p>
          </div>
          
          {/* Project 4 */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 border border-[#2A2D3E]">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80" 
                alt="Content Catalyst dashboard" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {["Payments", "Real-time Analytics", "Dashboard Creation"].map((tag, index) => (
                <span key={index} className={`px-4 py-1.5 rounded-full text-sm text-white ${index === 0 ? 'bg-[#13141F] border border-[#2A2D3E]' : 'bg-[#1E1F2E] border border-transparent'}`}>
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="text-[#9b87f5]">Content Catalyst</span>
            </h3>
            
            <p className="text-gray-400 mt-1">
              A centralized platform that consolidates campaign data from various sources, allowing users to monitor metrics in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
