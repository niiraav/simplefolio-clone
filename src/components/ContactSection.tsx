import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, ArrowRight, Instagram } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const currentYear = new Date().getFullYear();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-xl mx-auto">
        {/* Form Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Get in touch
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          I'm always interested in exploring new opportunities, collaborating, or
          exchanging ideas with like-minded individuals. Feel free to book a call
          or email me if you'd like to see my portfolio deck or to discuss a
          potential project.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-muted/50 border-0 h-12 transition-all duration-300 focus:bg-muted/70 focus:scale-[1.01]"
            />
            <Input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-muted/50 border-0 h-12 transition-all duration-300 focus:bg-muted/70 focus:scale-[1.01]"
            />
          </div>
          <Textarea
            placeholder="Write your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-muted/50 border-0 min-h-[120px] resize-none transition-all duration-300 focus:bg-muted/70 focus:scale-[1.005]"
          />
          <Button 
            type="submit"
            className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Send Message
          </Button>
        </form>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <Button 
            variant="outline" 
            size="lg"
            className="group transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Schedule a Call
              <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="transition-all duration-300 hover:scale-110 hover:bg-accent"
            asChild
          >
            <a href="mailto:hello@miacarter.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center mb-6">
            Copyright © {currentYear} Mia Carter. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="https://dribbble.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/>
              </svg>
            </a>
            <a 
              href="mailto:hello@miacarter.com"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
