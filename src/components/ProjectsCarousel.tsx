import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";
import project4 from "@/assets/project-4.png";
import project5 from "@/assets/project-5.png";
import project6 from "@/assets/project-6.png";
import project7 from "@/assets/project-7.png";
import project8 from "@/assets/project-8.png";
import project9 from "@/assets/project-9.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Gophr Logistics Dashboard",
    description: "Real-time delivery tracking and job management",
    image: project1,
  },
  {
    id: 2,
    title: "Buzz Bingo Mobile App",
    description: "Mobile experience for bingo and gaming",
    image: project2,
  },
  {
    id: 3,
    title: "Contract Renewals",
    description: "Worldpay contract review and confirmation flow",
    image: project3,
  },
  {
    id: 4,
    title: "Strava Redesign",
    description: "Fitness tracking app redesign concept",
    image: project4,
  },
  {
    id: 5,
    title: "Patch Plant Care",
    description: "Mobile app for plant care and gardening",
    image: project5,
  },
  {
    id: 6,
    title: "Thomson Reuters Dashboard",
    description: "Legal research and document management platform",
    image: project6,
  },
  {
    id: 7,
    title: "Shopify Integration",
    description: "E-commerce store management dashboard",
    image: project7,
  },
  {
    id: 8,
    title: "Payment Links Dashboard",
    description: "Worldpay merchant dashboard and analytics",
    image: project8,
  },
  {
    id: 9,
    title: "Terminal Order Tracking",
    description: "Worldpay dashboard for terminal returns and tracking",
    image: project9,
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative w-[280px] md:w-[360px] lg:w-[420px] flex-shrink-0">
      <div className="relative overflow-hidden rounded-3xl bg-card shadow-card transition-all duration-300 group-hover:shadow-card-hover group-hover:-translate-y-1">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectsCarousel = () => {
  return (
    <section id="projects" className="py-8 w-full overflow-hidden">
      {/* Horizontal Scroll Container - Full width */}
      <div className="horizontal-scroll px-4 md:px-8 gap-6">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: `${400 + index * 100}ms`, animationFillMode: 'forwards' }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsCarousel;
