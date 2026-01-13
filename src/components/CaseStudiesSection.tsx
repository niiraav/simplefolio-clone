import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

// Company logo configurations
const companyLogos: Record<string, { name: string; logo: string }> = {
  "worldpay-contract-renewals": {
    name: "Worldpay",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Worldpay_logo.svg/320px-Worldpay_logo.svg.png"
  },
  "gophr-logistics": {
    name: "Gophr",
    logo: "https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1444978295/z2cwcdh9zxyffzlwzjwd.png"
  },
  "microsoft-teams-ecosystem": {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png"
  }
};

const CompanyTag = ({ projectId }: { projectId: string }) => {
  const company = companyLogos[projectId];
  if (!company) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-background/80 backdrop-blur-sm border border-border rounded-full">
      <img 
        src={company.logo} 
        alt={`${company.name} logo`}
        className="h-4 w-auto object-contain"
      />
      <span className="text-xs font-medium text-foreground">{company.name}</span>
    </div>
  );
};

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
        <div className="rounded-[24px] overflow-hidden relative">
          <img 
            src={image} 
            alt={title} 
            className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          {/* Company Tag overlay */}
          <div className="absolute top-4 left-4">
            <CompanyTag projectId={id} />
          </div>
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