import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Design with Icons That Stand Out",
    description: "A comprehensive icon library for modern interfaces",
    image: project1,
  },
  {
    id: 2,
    title: "Simplify Conversations",
    description: "AI chatbot platform for seamless communication",
    image: project2,
  },
  {
    id: 3,
    title: "Discover The Beauty Of Nature",
    description: "E-commerce platform for outdoor enthusiasts",
    image: project3,
  },
  {
    id: 4,
    title: "Finance Dashboard",
    description: "Real-time trading and analytics platform",
    image: project4,
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
