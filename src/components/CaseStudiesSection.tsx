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
const caseStudies: CaseStudy[] = [{
  id: 1,
  title: "Aero Landing page design",
  description: "This project focuses on the design and development of a comprehensive AI chatbot platform, Aero.",
  image: project2
}, {
  id: 2,
  title: "Design with Icons That Stand Out",
  description: "A comprehensive icon library for modern interfaces with customizable styles.",
  image: project1
}, {
  id: 3,
  title: "Discover The Beauty Of Nature",
  description: "E-commerce platform designed for outdoor enthusiasts with seamless checkout flows.",
  image: project3
}];
const CaseStudyCard = ({
  study
}: {
  study: CaseStudy;
}) => {
  return <div className="group w-full max-w-[510px] mx-auto">
      {/* Outer Card Container with rounded border */}
      <div className="rounded-[32px] border p-4 border-border bg-primary-foreground">
        {/* Gray Image Container */}
        <div className="rounded-[24px] overflow-hidden">
          <img 
            src={study.image} 
            alt={study.title} 
            className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>
        
        {/* Content below image container */}
        <div className="pt-8 pb-4 px-2 space-y-4">
          <h3 className="text-2xl md:text-[28px] font-bold text-foreground leading-tight">
            {study.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {study.description}
          </p>
          <button className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-full font-medium transition-all duration-300 hover:bg-secondary/80 hover:gap-3 mt-2">
            View Project
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>;
};
const CaseStudiesSection = () => {
  return <section id="case-studies" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-16">
          Here's What I've Been Up To.
        </h2>
        
        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map(study => <CaseStudyCard key={study.id} study={study} />)}
        </div>
      </div>
    </section>;
};
export default CaseStudiesSection;