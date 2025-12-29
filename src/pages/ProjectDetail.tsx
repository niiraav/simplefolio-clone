import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { getProjectById } from "@/data/projects";
const ProjectDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const project = getProjectById(id || "");
  if (!project) {
    return <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>;
  }

  // Check if this is a detailed case study (has sections)
  const isDetailedCaseStudy = project.sections && project.sections.length > 0;
  return <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-8">
        {/* Hero Section */}
        <section className="max-w-[510px] mx-auto px-4 md:px-0 py-[80px] pt-[120px]">
          {/* Go Back Link */}
          <Link to="/#case-studies" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Go back
          </Link>

          {/* Title and Metadata */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
              {project.title}
            </h1>
            
            {/* Role & Timeline */}
            {(project.role || project.timeline) && <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                {project.role && <span className="px-3 py-1 bg-secondary rounded-full">{project.role}</span>}
                {project.timeline && <span className="px-3 py-1 bg-secondary rounded-full">{project.timeline}</span>}
              </div>}

            {/* Tools */}
            {project.tools && project.tools.length > 0 && <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool, index) => <span key={index} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded">
                    {tool}
                  </span>)}
              </div>}

            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-full font-medium text-foreground hover:bg-secondary transition-colors">
                Live Website
                <ExternalLink className="w-4 h-4" />
              </a>}
          </div>

          {/* Hero Image */}
          <div className="rounded-[24px] overflow-hidden bg-muted mb-16">
            <img src={project.images[0]} alt={project.title} className="w-full aspect-[4/3] object-cover" />
          </div>

          {isDetailedCaseStudy ? <>
              {/* Detailed Case Study Sections */}
              {project.sections?.map((section, index) => <div key={index} className="mb-16">
                  {/* Section Header */}
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  
                  {/* Section Content */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {section.content}
                  </p>

                  {/* Bullets */}
                  {section.bullets && section.bullets.length > 0 && <ul className="space-y-3 mb-6">
                      {section.bullets.map((bullet, bulletIndex) => <li key={bulletIndex} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>)}
                    </ul>}

                  {/* Pull Quote */}
                  {section.pullQuote && <blockquote className="border-l-4 border-primary pl-6 py-4 my-8 bg-secondary/30 rounded-r-lg">
                      {section.pullQuote.label && <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {section.pullQuote.label}
                        </span>}
                      <p className="text-lg font-medium text-foreground mt-2 italic">
                        "{section.pullQuote.text}"
                      </p>
                    </blockquote>}

                  {/* Section Image */}
                  {section.image && <div className="rounded-[24px] overflow-hidden bg-muted mt-8">
                      <img src={section.image} alt={section.title} className="w-full object-cover" />
                    </div>}
                </div>)}

              {/* Impact Section */}
              {project.impacts && project.impacts.length > 0 && <div className="mb-16">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                    Impact & Results
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {project.impacts.map((impact, index) => <div key={index} className="bg-secondary/50 rounded-2xl p-6 text-center">
                        <p className="text-3xl md:text-4xl font-bold text-primary mb-1">
                          {impact.value}
                        </p>
                        <p className="text-sm font-medium text-foreground mb-1">
                          {impact.metric}
                        </p>
                        {impact.description && <p className="text-xs text-muted-foreground">
                            {impact.description}
                          </p>}
                      </div>)}
                  </div>
                </div>}

              {/* Reflection */}
              {project.reflection && <div className="mb-16">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    Reflection
                  </h2>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {project.reflection}
                  </p>
                </div>}
            </> : <>
              {/* Simple Project Layout */}
              <div className="mb-16">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Project Overview
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {project.images[1] && <div className="rounded-[24px] overflow-hidden bg-muted mb-16">
                  <img src={project.images[1]} alt={`${project.title} - Detail 1`} className="w-full aspect-[4/3] object-cover" />
                </div>}

              <div className="mb-16">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {project.images[2] && <div className="rounded-[24px] overflow-hidden bg-muted mb-16">
                  <img src={project.images[2]} alt={`${project.title} - Detail 2`} className="w-full object-cover" />
                </div>}
            </>}
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>;
};
export default ProjectDetail;