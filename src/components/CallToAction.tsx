
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for your message!",
      description: "We'll get back to you soon.",
    });
  };

  return (
    <section id="cta" className="section-container bg-[#131520] py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Submit Your Project</h2>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 bg-[#1E2030] p-8 rounded-xl">
          <div className="space-y-2">
            <Textarea
              id="message"
              placeholder="Describe your idea or the problem you're trying to solve"
              rows={7}
              className="bg-[#191B2A] border-[#383B50] text-white placeholder:text-gray-400 text-base"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className="bg-[#191B2A] border-[#383B50] text-white placeholder:text-gray-400 h-12 text-base"
                required
              />
            </div>
            <div>
              <Input
                id="name"
                placeholder="Name"
                className="bg-[#191B2A] border-[#383B50] text-white placeholder:text-gray-400 h-12 text-base"
                required
              />
            </div>
          </div>
          
          <div>
            <Input
              id="topics"
              placeholder="What are you looking to build? (e.g., MVP, Automation, AI tool)"
              className="bg-[#191B2A] border-[#383B50] text-white placeholder:text-gray-400 h-12 text-base"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full flex items-center justify-center rounded-md border border-white bg-[#191B2A] hover:bg-[#22253B] text-white text-lg font-medium py-6 h-auto px-4"
          >
            Submit Your Project
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
