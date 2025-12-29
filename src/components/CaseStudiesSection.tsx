import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const CaseStudyCard = ({
  id,
  title,
  description,
  image,
}: {
  id: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="group w-full">
      {/* Outer Card Container with rounded border */}
      <div className="rounded-[32px] border p-4 border-border bg-primary-foreground py-[24px] px-[24px]">
        {/* Gray Image Container */}
        <div className="rounded-[24px] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        
        {/* Content below image container */}
        <div className="pt-8 pb-4 px-2 space-y-4">
          <h3 className="text-2xl md:text-[28px] font-bold text-foreground leading-tight">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          <Link 
            to={`/project/${id}`}
            className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-full font-medium transition-all duration-300 hover:bg-secondary/80 hover:gap-3 mt-2"
          >
            View Project
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 max-w-[510px] mx-auto px-0">
      {/* Section Heading */}
      <h2 className="text-2xl font-bold text-foreground text-left mb-6 font-serif">
        Here's What I've Been Up To.
      </h2>
      
      {/* Case Studies Grid */}
      <div className="space-y-12">
        {projects.map(project => (
          <CaseStudyCard 
            key={project.id} 
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;