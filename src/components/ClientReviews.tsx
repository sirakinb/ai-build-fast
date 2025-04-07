import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Absolutely amazing and solution-driven! Working together was a seamless experience from start to finish. They not only delivered outstanding results but also went above and beyond to address challenges with creative, effective solutions. Their professionalism, attention to detail, and commitment to excellence made a lasting impact. I will definitely collaborate with them again and highly recommend their services to anyone seeking top-tier expertise and results.",
    author: "DO Olivas",
    company: "LogoSeed"
  },
  {
    text: "I've had the pleasure of working with Aki, and I can confidently say he's exceptional in his field. His communication skills are top-notch, and he truly understands his craft. Aki is not your average Automation Expert. He goes above and beyond by offering valuable insights and suggestions. He meticulously reviewed our chatbot creation process, making several adjustments to ensure it met my criteria. Working with Aki has been a pleasure, and I look forward to collaborating with him again in the future.",
    author: "Pedro Rodriguez",
    company: "Blue Proma Digital"
  }
];

const ClientReviews = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What They Are Saying About Pentridge Media
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-[#13141F] p-8 rounded-xl shadow-sm border border-[#2A2D3E] hover-lift flex flex-col"
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              
              <p className="text-white/80 mb-8 flex-grow">
                {review.text}
              </p>
              
              <div>
                <p className="text-white font-semibold">{review.author}</p>
                <p className="text-white/60">{review.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews; 