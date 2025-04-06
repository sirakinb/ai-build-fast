
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
    <section id="cta" className="section-container bg-background">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let's Build Something Smart</h2>
        <p className="text-lg text-muted">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-xl shadow-md border border-border">
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-white">
              Tell us more about your project
            </label>
            <Textarea
              id="message"
              placeholder="Describe your idea or the problem you're trying to solve"
              rows={5}
              className="bg-card border-border text-white placeholder:text-muted"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-white">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-card border-border text-white placeholder:text-muted"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-white">
                Name
              </label>
              <Input
                id="name"
                placeholder="Your name"
                className="bg-card border-border text-white placeholder:text-muted"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="project-type" className="text-sm font-medium text-white">
              What are you looking to build?
            </label>
            <select 
              id="project-type" 
              className="w-full h-10 px-3 rounded-md border border-border bg-card text-white placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            >
              <option value="" disabled selected>Select an option</option>
              <option value="mvp">An MVP</option>
              <option value="automation">Automated Workflow</option>
              <option value="other">Something else</option>
            </select>
          </div>
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
            Submit Your Project
          </Button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;
