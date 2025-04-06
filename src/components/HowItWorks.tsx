
import React from 'react';
import { Calendar, FileText, Zap, Package, Layers, FileSearch, Wrench, Clock, FolderOpen } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const processIconStyle = "h-12 w-12 text-primary p-2 bg-white/10 rounded-full";

const MVPDevelopmentSteps = [
  {
    icon: <Calendar className={processIconStyle} />,
    title: "Initial Consultation",
    description: "Let's align on your idea and goals. We'll explore your vision and what success looks like for your MVP."
  },
  {
    icon: <FileText className={processIconStyle} />,
    title: "MVP Planning & Proposal",
    description: "We map out the tech approach, tools we'll use (AI + no-code), and timeline. You get clarity before we build."
  },
  {
    icon: <Zap className={processIconStyle} />,
    title: "Development Sprint",
    description: "We build your version 1 in ~4–5 weeks with regular updates and check-ins."
  },
  {
    icon: <Package className={processIconStyle} />,
    title: "MVP Delivery",
    description: "Fully functional product delivered, ready for launch and user acquisition."
  },
  {
    icon: <Layers className={processIconStyle} />,
    title: "30-Day Maintenance",
    description: "Light post-launch support to fix bugs and ensure stability."
  }
];

const WorkflowAutomationSteps = [
  {
    icon: <FileSearch className={processIconStyle} />,
    title: "Initial Audit Call",
    description: "We walk through your current manual process or bottleneck to pinpoint automation opportunities."
  },
  {
    icon: <Wrench className={processIconStyle} />,
    title: "System Design",
    description: "We outline the automation logic, tools to be used, and success outcomes."
  },
  {
    icon: <Clock className={processIconStyle} />,
    title: "Build & Test",
    description: "We build the automation, test it thoroughly, and ensure it's tailored to your business."
  },
  {
    icon: <FolderOpen className={processIconStyle} />,
    title: "Delivery + Documentation",
    description: "You receive a working automation, SOPs, and a short video walkthrough showing how it all works."
  }
];

const ProcessPath = ({ title, timeframe, steps }: { title: string; timeframe: string; steps: any[] }) => (
  <div className="border border-border bg-card/50 rounded-xl p-8 hover-lift">
    <div className="mb-6">
      <span className="bg-white/10 text-white text-sm px-4 py-1 rounded-full">{timeframe}</span>
      <h3 className="text-2xl font-bold text-white mt-4">{title}</h3>
    </div>
    
    <div className="space-y-8">
      {steps.map((step, index) => (
        <div key={index} className="flex gap-5">
          <div className="flex-shrink-0 mt-1">
            {step.icon}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {index + 1}. {step.title}
            </h4>
            <p className="text-white/70">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-container bg-background">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">How It Works: Two Paths to Build with AI</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Choose the path that fits your needs - full MVP development or targeted workflow automation
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <ProcessPath 
          title="MVP Development Flow" 
          timeframe="4–5 Weeks"
          steps={MVPDevelopmentSteps} 
        />
        
        <ProcessPath 
          title="Custom Automated Workflow" 
          timeframe="7–10 Days"
          steps={WorkflowAutomationSteps} 
        />
      </div>
    </section>
  );
};

export default HowItWorks;
