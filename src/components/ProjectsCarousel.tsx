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
    <div className="group relative w-[320px] md:w-[380px] flex-shrink-0">
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-card transition-all duration-300 group-hover:shadow-card-hover group-hover:-translate-y-1">
        {/* Browser Chrome */}
        <div className="bg-secondary/50 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
        </div>
        
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      
      {/* Info */}
      <div className="mt-4 px-1">
        <h3 className="font-semibold text-foreground text-base">{project.title}</h3>
        <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
      </div>
    </div>
  );
};

const ProjectsCarousel = () => {
  return (
    <section id="projects" className="py-8">
      {/* Horizontal Scroll Container */}
      <div className="horizontal-scroll px-6 md:px-12">
        {/* Left spacer for centered start */}
        <div className="w-[calc((100vw-380px)/2)] flex-shrink-0 hidden md:block" />
        
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="opacity-0 animate-fade-in"
            style={{ animationDelay: `${400 + index * 100}ms`, animationFillMode: 'forwards' }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
        
        {/* Right spacer */}
        <div className="w-[calc((100vw-380px)/2)] flex-shrink-0 hidden md:block" />
      </div>
    </section>
  );
};

export default ProjectsCarousel;
