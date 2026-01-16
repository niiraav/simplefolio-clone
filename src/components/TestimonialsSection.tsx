import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

import alexAvatar from "@/assets/testimonial-alex.png";
import josephAvatar from "@/assets/testimonial-joseph.png";
import willAvatar from "@/assets/testimonial-will.png";
import sarahAvatar from "@/assets/testimonial-sarah.png";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Nirav is a thoughtful and articulate designer who created some strong designs that were highly impactful with Teams customers and partners.",
    author: "Alex Powell",
    role: "Principal Design Director at Microsoft",
    avatar: alexAvatar
  },
  {
    id: 2,
    content: "Nirav is a well-rounded UI/UX designer. I'd recommend him in a heart-beat to any companies.",
    author: "Joseph Kim",
    role: "User Experience Manager at Sage",
    avatar: josephAvatar
  },
  {
    id: 3,
    content: "Nirav, our first employee, has proven brilliant from idea creation to execution.",
    author: "Will Mapstone",
    role: "Co-founder & CEO at Wash Doctors",
    avatar: willAvatar
  },
  {
    id: 4,
    content: "Nirav is easily one of the most thorough and thoughtful designers I've had the chance to work with.",
    author: "Sarah Carruth",
    role: "Head of Digital Product Management at Buzz Bingo",
    avatar: sarahAvatar
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 max-w-[510px] mx-auto px-4">
      <h2 className="text-2xl font-bold text-foreground text-left mb-6 font-serif">
        Testimonials
      </h2>
      
      <div className="relative">
        {/* Quote Icon */}
        <Quote className="absolute -top-4 -left-2 h-12 w-12 text-muted/50" />
        
        {/* Testimonial Card */}
        <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-card">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
            "{currentTestimonial.content}"
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src={currentTestimonial.avatar} 
                  alt={currentTestimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground">{currentTestimonial.author}</p>
                <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full" onClick={prev}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full" onClick={next}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-foreground w-6" : "bg-muted-foreground/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
