import { ArrowRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Aero Landing page design",
    description: "This project focuses on the design and development of a comprehensive AI chatbot platform, Aero.",
    image: project2,
  },
  {
    id: 2,
    title: "Design with Icons That Stand Out",
    description: "A comprehensive icon library for modern interfaces with customizable styles.",
    image: project1,
  },
  {
    id: 3,
    title: "Discover The Beauty Of Nature",
    description: "E-commerce platform designed for outdoor enthusiasts with seamless checkout flows.",
    image: project3,
  },
];

const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  return (
    <div className="group">
      {/* Card Container */}
      <div className="bg-card rounded-3xl p-4 shadow-sm border border-border/50 transition-all duration-300 group-hover:shadow-lg">
        {/* Image */}
        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
          <img 
            src={study.image} 
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      
      {/* Content below card */}
      <div className="mt-6 space-y-3">
        <h3 className="text-xl font-semibold text-foreground">
          {study.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {study.description}
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-full font-medium transition-colors hover:bg-secondary/80 mt-2">
          View Project
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Here's What I've Been Up To.
        </h2>
        
        {/* Case Studies Grid */}
        <div className="space-y-16">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
