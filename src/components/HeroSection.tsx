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
    <section id="home" className="min-h-[70vh] flex flex-col items-center justify-center pt-28 pb-20 px-6 max-w-[510px] mx-auto">
        {/* Avatar */}
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-border">
            <img 
              src={avatar} 
              alt="Mia Carter" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight tracking-tight">
          Hey, I'm Mia Carter.
          <br />
          Dreamer & Designer
        </h1>

        {/* Tagline */}
        <p className="text-base text-muted-foreground max-w-md mb-10 leading-relaxed">
          Crafting seamless experiences and bold visuals. High school student by day, creative thinker, and aspiring innovator by night.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Get this Template
          </Button>
          <Button 
            variant="availability" 
            size="lg"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            Available for new project
          </Button>
        </div>
    </section>
  );
};

export default HeroSection;
