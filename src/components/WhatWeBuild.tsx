
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const PortfolioShowcase = () => {
  return (
    <section id="portfolio-showcase" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            A peak into what we have built
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Below are some of the apps and workflows we've helped companies launch.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* Project 1 - Rental Application Automation */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 border border-[#2A2D3E]">
              <AspectRatio ratio={16/9}>
                <img 
                  src="/lovable-uploads/7ef508ad-2830-4fb5-8dc2-7ca4d8b82887.png" 
                  alt="Rental Application Automation workflow diagram" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {["Workflow Automation", "Real Estate", "Data Processing", "Application Tracking"].map((tag, index) => (
                <span key={index} className={`px-4 py-1.5 rounded-full text-sm text-white ${index === 0 ? 'bg-[#13141F] border border-[#2A2D3E]' : 'bg-[#1E1F2E] border border-transparent'}`}>
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Rental Application Automation</h3>
            
            <p className="text-gray-400 mt-1">
              A workflow automation tool that streamlines the rental application process, keeping applicants updated through each stage of renting a home.
            </p>
          </div>
          
          {/* Project 2 - Calorie Canvas */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 border border-[#2A2D3E]">
              <AspectRatio ratio={16/9}>
                <img 
                  src="/lovable-uploads/9dfe6a18-0994-4fe5-9898-497c920ab721.png" 
                  alt="Calorie Canvas app screenshot" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
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
          
          {/* Project 3 - Content Repurposing Workflow */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 border border-[#2A2D3E]">
              <AspectRatio ratio={16/9}>
                <img 
                  src="/lovable-uploads/f19ba37b-be04-4c6c-a5a7-dd800570c785.png" 
                  alt="Content Repurposing Workflow diagram" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {["AI", "Content Creation", "Social Media", "Audio/Video Processing"].map((tag, index) => (
                <span key={index} className={`px-4 py-1.5 rounded-full text-sm text-white ${index === 0 ? 'bg-[#13141F] border border-[#2A2D3E]' : 'bg-[#1E1F2E] border border-transparent'}`}>
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Content Repurposing Workflow</h3>
            
            <p className="text-gray-400 mt-1">
              A workflow that automates the process of creating content assets for social media channels based on audio or video podcasts, meetings, and long form content.
            </p>
          </div>
          
          {/* Project 4 - AI-Powered Research Assistant */}
          <div className="flex flex-col h-full">
            <div className="rounded-xl overflow-hidden mb-6 border border-[#2A2D3E]">
              <AspectRatio ratio={16/9}>
                <img 
                  src="/lovable-uploads/418b4d4d-3f0e-4722-b057-91e649014455.png" 
                  alt="AI-Powered Research Assistant interface" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {["AI", "Web Research", "Workflow Integration", "Knowledge Management"].map((tag, index) => (
                <span key={index} className={`px-4 py-1.5 rounded-full text-sm text-white ${index === 0 ? 'bg-[#13141F] border border-[#2A2D3E]' : 'bg-[#1E1F2E] border border-transparent'}`}>
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">
              AI-Powered Research Assistant
            </h3>
            
            <p className="text-gray-400 mt-1">
              An AI tool that answers queries by searching the web, and can connect with your workflows to turn research into action.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
