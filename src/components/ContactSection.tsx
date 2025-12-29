import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 5000);
  };
  return <section id="contact" className="py-20 px-6 max-w-[510px] mx-auto">
        {/* Form Header */}
        <h2 className="text-2xl font-bold text-foreground text-left mb-4 font-serif">
          Get in touch
        </h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          I'm always interested in exploring new opportunities, collaborating, or
          exchanging ideas with like-minded individuals. Feel free to book a call
          or email me if you'd like to see my portfolio deck or to discuss a
          potential project.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input placeholder="Full Name" value={formData.name} onChange={e => setFormData({
          ...formData,
          name: e.target.value
        })} className="bg-muted/50 border-0 h-12 transition-all duration-300 focus:bg-muted/70" />
            <Input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData({
          ...formData,
          email: e.target.value
        })} className="bg-muted/50 border-0 h-12 transition-all duration-300 focus:bg-muted/70" />
          </div>
          <Textarea placeholder="Write your Message" value={formData.message} onChange={e => setFormData({
        ...formData,
        message: e.target.value
      })} className="bg-muted/50 border-0 min-h-[120px] resize-none transition-all duration-300 focus:bg-muted/70" />
          <Button 
            type="submit" 
            className="w-full h-12 bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
            disabled={isSubmitted}
          >
            {isSubmitted ? "Thank you" : "Send Message"}
          </Button>
        </form>
    </section>;
};
export default ContactSection;