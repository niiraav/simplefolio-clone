import { Home, Instagram, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  activeSection?: string;
}

const Navbar = ({ activeSection = "home" }: NavbarProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 opacity-0 animate-fade-in animation-delay-200">
      <div className="flex items-center gap-1 bg-nav/80 backdrop-blur-xl rounded-full px-2 py-2 shadow-nav border border-nav-border">
        <div className="flex items-center gap-1">
          <Button 
            variant={activeSection === "home" ? "navActive" : "nav"} 
            size="iconSm"
            className="rounded-full"
            onClick={() => scrollToSection("home")}
          >
            <Home className="h-4 w-4" />
          </Button>
          
          <div className="w-px h-5 bg-border mx-1" />
          
          <Button 
            variant="nav" 
            size="iconSm"
            className="rounded-full"
            asChild
          >
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </Button>
          
          <Button 
            variant="nav" 
            size="iconSm"
            className="rounded-full"
            asChild
          >
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
            </a>
          </Button>
          
          <Button 
            variant="nav" 
            size="iconSm"
            className="rounded-full"
            onClick={() => scrollToSection("about")}
          >
            <FileText className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="w-px h-5 bg-border mx-1" />
        
        <Button 
          variant="hero" 
          size="sm"
          className="rounded-full"
          onClick={() => scrollToSection("contact")}
        >
          Book a Call
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
