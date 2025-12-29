import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Avatar */}
        <div className="mb-8 opacity-0 animate-fade-in animation-delay-300">
          <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-secondary shadow-lg">
            <img 
              src={avatar} 
              alt="Mia Carter" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 animate-fade-in animation-delay-400">
          Hey, I'm Mia Carter.
          <br />
          Dreamer & <span className="inline-flex items-center gap-2">🎨 Designer</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8 opacity-0 animate-fade-in animation-delay-500">
          Crafting seamless experiences and bold visuals. High school student by day, creative thinker, and aspiring innovator by 🌙 night.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in animation-delay-600">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Book a Call
          </Button>
          <Button 
            variant="availability" 
            size="lg"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            Available for new project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
