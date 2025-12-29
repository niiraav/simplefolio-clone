import avatar from "@/assets/avatar.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src={avatar} 
                alt="Mia Carter" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-accent/20 -z-10" />
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Mia Carter, a curious designer, coder, and storyteller. Currently a student at Springfield High School, but always exploring the limitless possibilities of creativity and technology.
              </p>
              <p>
                I thrive on transforming ideas into reality, whether it's crafting digital interfaces, designing immersive visuals, or building websites that feel effortless to use.
              </p>
              <p>
                When I'm not designing, you'll find me exploring new coffee shops, taking photos of everyday moments, or getting lost in a good book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
