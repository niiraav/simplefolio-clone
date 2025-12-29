const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          About
        </h2>
        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg md:text-xl font-semibold text-foreground leading-relaxed">
            I'm a curious and enthusiastic product designer with a side passion for code and solving user problems.
          </p>
          <p>
            I started my artistic journey as a kid, drawing comics as a diary, and later joining a UAL to learn Advertising. With product design, I started 6 years ago when I joined a project to work for Wash Doctors, and ever since then I've been very hung up on service design, tech innovations and intuitive UX.
          </p>
          <p>
            Whether it's optimising merchant dashboards or simplifying checkout flows, I blend creative problem-solving with rigorous logic.
          </p>
          <p>
            I'm constantly learning new things and always get inspired by people around me.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
