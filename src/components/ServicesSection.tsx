import { Code, Palette, Layers, Sparkles } from "lucide-react";

interface Service {
  id: number;
  title: string;
  icon: React.ReactNode;
  gradient: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    icon: <Code className="h-6 w-6" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Creative Design",
    icon: <Palette className="h-6 w-6" />,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 3,
    title: "Branding",
    icon: <Layers className="h-6 w-6" />,
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 4,
    title: "Product Design",
    icon: <Sparkles className="h-6 w-6" />,
    gradient: "from-violet-500/20 to-purple-500/20",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          How Can I Help?
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-md mx-auto">
          Let's turn your vision into something amazing.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-foreground/20 transition-all duration-300 hover:shadow-lg cursor-pointer opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                {service.icon}
              </div>
              <h3 className="font-semibold text-foreground text-lg">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
