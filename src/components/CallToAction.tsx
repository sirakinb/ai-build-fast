
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CallToAction = () => {
  const faqs = [
    {
      question: "How do I know if I need an MVP or a workflow?",
      answer: "If you have an app idea or want to test a concept, you likely need an MVP. If you're running a business and losing time to repetitive tasks, an automated workflow might be your best first step."
    },
    {
      question: "What tools or platforms do you use?",
      answer: "We use a mix of AI Tech Tools like Lovable, Cursor, Rork, automation platforms like Make, Airtable and various APIs depending on what's best for your use case."
    },
    {
      question: "Can I make edits after the project is delivered?",
      answer: "Yes — you'll receive a handoff that includes SOPs and video walkthroughs, so you or your team can make updates. Ongoing support is also available if needed."
    },
    {
      question: "How is this different from hiring a traditional dev team?",
      answer: "Faster turnaround, smaller investment, and no bloated timelines. We build using AI and no-code tools to help you launch or optimize in weeks, not quarters."
    },
    {
      question: "Do I need to be technical to work with you?",
      answer: "Not at all. We'll guide you through the process and handle all the tech so you can focus on your vision or operations."
    },
    {
      question: "What if I'm not sure what I need yet?",
      answer: "Schedule a call. We'll walk through your goals and help you figure out the best path forward — whether that's building now or planning for later."
    }
  ];

  return (
    <section id="faq" className="section-container bg-[#131520] py-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[#1E2030] rounded-xl overflow-hidden border border-[#383B50]"
            >
              <AccordionTrigger className="px-6 py-4 text-white text-lg font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-28 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white mb-2">This Is Your Sign To Move</h3>
            <p className="text-muted mb-6">Turn your ideas into real products or streamline your business with smart automation.</p>
          </div>
          <a 
            href="#" 
            className="inline-flex items-center justify-center rounded-md border border-white bg-[#191B2A] hover:bg-[#22253B] text-white text-lg font-medium py-4 px-8"
          >
            Schedule A Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
