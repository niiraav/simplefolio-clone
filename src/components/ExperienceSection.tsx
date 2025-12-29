interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  logo: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    period: "2024 - Present",
    role: "Lead Designer",
    company: "Aura",
    logo: "🌟",
  },
  {
    id: 2,
    period: "2022 - 2024",
    role: "Senior UI/UX Designer",
    company: "Apple",
    logo: "🍎",
  },
  {
    id: 3,
    period: "2020 - 2022",
    role: "Product Designer",
    company: "Shopify",
    logo: "🛍️",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Work Experience
        </h2>
        
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-6 rounded-2xl bg-background border border-border hover:border-foreground/20 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <span className="text-sm text-muted-foreground whitespace-nowrap min-w-[120px]">
                {exp.period}
              </span>
              
              <div className="flex items-center gap-3 flex-1">
                <span className="text-foreground">{exp.role} at</span>
                <div className="flex items-center gap-2 font-semibold text-foreground">
                  <span className="text-xl">{exp.logo}</span>
                  <span>{exp.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
