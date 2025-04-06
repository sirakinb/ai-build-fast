
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
    <section id="cta" className="section-container">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">Let's Build Something Smart</h2>
        <p className="text-lg text-gray-600">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="project-type" className="text-sm font-medium">
              What are you looking to build?
            </label>
            <select 
              id="project-type" 
              className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
              required
            >
              <option value="" disabled selected>Select an option</option>
              <option value="mvp">An MVP</option>
              <option value="automation">Automated Workflow</option>
              <option value="other">Something else</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Tell us more about your project
            </label>
            <Textarea
              id="message"
              placeholder="Describe your idea or the problem you're trying to solve"
              rows={5}
              required
            />
          </div>
          
          <Button type="submit" className="w-full btn-primary">
            Submit Your Project
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
