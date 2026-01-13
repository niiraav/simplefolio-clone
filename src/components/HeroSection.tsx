import { Button } from "@/components/ui/button";
import avatar from "@/assets/avatar.jpg";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="home" className="min-h-[70vh] flex-col pt-28 pb-20 max-w-[510px] mx-auto px-4 flex items-start justify-start">
        {/* Avatar */}
        <div className="mb-8 border-primary">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary-foreground">
            <img alt="Nirav Arvinda" src="/lovable-uploads/ec518bb2-b216-49b6-b35c-fa7aefcef1b3.jpg" className="w-full h-full object-cover border-primary-foreground" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-6 leading-tight tracking-tight">
          Hey, I'm Nirav Arvinda.
          <br />
          Dreamer & Designer
        </h1>

        {/* Tagline */}
        <p className="max-w-md mb-10 leading-relaxed text-left font-medium px-0 text-muted-foreground text-lg">I am passionate about improving experiences, interrogating the "why", and using design to solve complex business problems.</p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="hero" size="lg" onClick={() => scrollToSection("contact")}>
            Get in touch
          </Button>
          <div className="inline-flex items-center gap-2 h-11 rounded-[24px] text-sm font-medium bg-green-100 border-accent text-emerald-700 px-[24px]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new project
          </div>
        </div>
    </section>;
};
export default HeroSection;