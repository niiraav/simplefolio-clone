import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SectionImageCarousel from "@/components/SectionImageCarousel";
import ClickableImage from "@/components/ClickableImage";
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
        <section className="max-w-[510px] mx-auto px-6 md:px-4 py-[120px] pt-[120px] pb-[80px]">
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
            {project.tools && project.tools.length > 0}

            {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-background border border-border rounded-full font-medium text-foreground hover:bg-secondary transition-colors">
                Live Website
                <ExternalLink className="w-4 h-4" />
              </a>}
          </div>

          {/* Hero Image */}
          <div className="mb-16">
            <ClickableImage image={{
            src: project.images[0],
            alt: project.title
          }} />
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
                          <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gray-300" />
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

                  {/* Section Image Carousel or Single Image */}
                  {section.galleryImages && section.galleryImages.length > 0 ? <SectionImageCarousel images={section.galleryImages} title={section.title} /> : section.image && <ClickableImage image={{
              src: section.image,
              alt: section.title
            }} />}
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
                  
                  {/* Impact Image */}
                  {project.impactImage && <ClickableImage image={project.impactImage} />}
                </div>}

              {/* Reflection */}
              {project.reflection && <div className="mb-16">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    Reflection
                  </h2>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {project.reflection}
                  </p>
                  
                  {/* Reflection Images Carousel */}
                  {project.reflectionImages && project.reflectionImages.length > 0 && <SectionImageCarousel images={project.reflectionImages} title="Reflection" />}
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

              {project.images[1] && <div className="mb-16">
                  <ClickableImage image={{
              src: project.images[1],
              alt: `${project.title} - Detail 1`
            }} />
                </div>}

              <div className="mb-16">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                  Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {project.images[2] && <div className="mb-16">
                  <ClickableImage image={{
              src: project.images[2],
              alt: `${project.title} - Detail 2`
            }} />
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