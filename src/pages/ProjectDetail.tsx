import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { getProjectById } from "@/data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="max-w-[510px] mx-auto px-4 md:px-0">
          {/* Go Back Link */}
          <Link 
            to="/#case-studies" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Go back
          </Link>

          {/* Title and Live Website Row */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight max-w-[300px]">
              {project.title}
            </h1>
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-full font-medium text-foreground hover:bg-secondary transition-colors whitespace-nowrap"
              >
                Live Website
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Hero Image */}
          <div className="rounded-[24px] overflow-hidden bg-muted mb-16">
            <img 
              src={project.images[0]} 
              alt={project.title}
              className="w-full aspect-[4/3] object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Project Overview
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Second Image */}
          {project.images[1] && (
            <div className="rounded-[24px] overflow-hidden bg-muted mb-16">
              <img 
                src={project.images[1]} 
                alt={`${project.title} - Detail 1`}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          )}

          {/* Solution */}
          <div className="mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              Solution
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Third Image */}
          {project.images[2] && (
            <div className="rounded-[24px] overflow-hidden bg-muted mb-16">
              <img 
                src={project.images[2]} 
                alt={`${project.title} - Detail 2`}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          )}
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
