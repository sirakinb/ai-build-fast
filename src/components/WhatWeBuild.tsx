
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
            Below are some of the apps and workflows we've helped founders launch.
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
          
          {/* Project 2 - Calorie Canvas (replacing TravelApp) */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 border border-[#2A2D3E]">
              <img 
                src="/lovable-uploads/d7e9c0c2-2476-44be-8d3f-71975105597e.png" 
                alt="Calorie Canvas app screenshot" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {["Mobile App", "AI-Powered", "Nutrition", "Health & Fitness"].map((tag, index) => (
                <span key={index} className={`px-4 py-1.5 rounded-full text-sm text-white ${index === 0 ? 'bg-[#13141F] border border-[#2A2D3E]' : 'bg-[#1E1F2E] border border-transparent'}`}>
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Calorie Canvas</h3>
            
            <p className="text-gray-400 mt-1">
              Track your calories with just a picture. Snap a photo or scan a barcode, and instantly calculate calories and nutrients with personalized insights.
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
              Content Catalyst
            </h3>
            
            <p className="text-gray-400 mt-1">
              A centralized platform that consolidates campaign data from various sources, allowing users to monitor metrics in real-time.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center border-t border-[#2A2D3E] pt-12">
          <p className="text-lg text-white/80 max-w-4xl mx-auto">
            The projects showcased here represent a portion of our work that can be shared publicly. 
            We've developed other solutions that are currently protected by NDAs. 
            If you're interested in learning more, we'd be happy to have a private conversation to explore other areas in our portfolio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
