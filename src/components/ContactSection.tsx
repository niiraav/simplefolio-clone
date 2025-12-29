import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
          <Mail className="h-8 w-8 text-accent" />
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Let's Work Together
        </h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Have a project in mind? I'd love to hear about it. Let's create something amazing together.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="hero" 
            size="lg"
            className="group"
            asChild
          >
            <a href="mailto:hello@miacarter.com">
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            asChild
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Schedule a Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
