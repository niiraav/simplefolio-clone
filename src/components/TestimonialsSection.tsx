import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    content: "Mia has an exceptional ability to transform complex problems into elegant design solutions. She was integral in redesigning our app, improving both its functionality and visual appeal.",
    author: "David",
    role: "CEO",
    avatar: "👨‍💼",
  },
  {
    id: 2,
    content: "Working with Mia was an absolute pleasure! Her keen eye for detail and deep understanding of user experience transformed our project from concept to reality.",
    author: "Sarah",
    role: "Head of Design",
    avatar: "👩‍💻",
  },
  {
    id: 3,
    content: "Mia is a product designer who truly elevates the design process. Her innovative approach and creative solutions helped us rethink the entire user journey.",
    author: "Tom",
    role: "Product Manager",
    avatar: "👨‍🔬",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
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
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-2xl">
                  {currentTestimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{currentTestimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{currentTestimonial.role}</p>
                </div>
              </div>
              
              {/* Navigation */}
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full"
                  onClick={prev}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="rounded-full"
                  onClick={next}
                >
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
