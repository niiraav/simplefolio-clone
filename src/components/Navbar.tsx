import { Home, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface NavbarProps {
  activeSection?: string;
}

const Navbar = ({ activeSection = "home" }: NavbarProps) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 opacity-0 animate-fade-in animation-delay-200">
      <div className="flex items-center gap-1 bg-nav/80 backdrop-blur-xl rounded-2xl px-2 py-2 shadow-nav border border-nav-border">
        <div className="flex items-center gap-1">
          {/* Home */}
          <div className="relative">
            <Button 
              variant={activeSection === "home" ? "navActive" : "nav"} 
              size="iconSm"
              className="rounded-xl"
              onClick={() => scrollToSection("home")}
              onMouseEnter={() => setHoveredItem("home")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Home className="h-4 w-4" />
            </Button>
            {hoveredItem === "home" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap animate-fade-in">
                Home
              </div>
            )}
          </div>
          
          <div className="w-px h-5 bg-border mx-1" />
          
          {/* X/Twitter */}
          <div className="relative">
            <Button 
              variant="nav" 
              size="iconSm"
              className="rounded-xl"
              asChild
              onMouseEnter={() => setHoveredItem("twitter")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </Button>
            {hoveredItem === "twitter" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap animate-fade-in">
                X
              </div>
            )}
          </div>

          
          {/* My CV */}
          <div className="relative">
            <Button 
              variant={activeSection === "about" ? "navActive" : "nav"} 
              size="iconSm"
              className="rounded-xl"
              onClick={() => scrollToSection("about")}
              onMouseEnter={() => setHoveredItem("cv")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <FileText className="h-4 w-4" />
            </Button>
            {hoveredItem === "cv" && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded-lg whitespace-nowrap animate-fade-in">
                My CV
              </div>
            )}
          </div>
        </div>
        
        <div className="w-px h-5 bg-border mx-1" />
        
        <Button 
          variant="hero" 
          size="sm"
          className="rounded-xl"
          onClick={() => scrollToSection("contact")}
        >
          Book a Call
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
