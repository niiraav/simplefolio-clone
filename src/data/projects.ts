import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import gophrHero from "@/assets/gophr-hero.png";
import gophrDashboard from "@/assets/gophr-dashboard.png";
import gophrTracker from "@/assets/gophr-tracker.png";
import gophrInvoices from "@/assets/gophr-invoices.png";
import gophrTrustpilot from "@/assets/gophr-trustpilot.png";
import gophrCards from "@/assets/gophr-cards.png";
import gophrMobileEvolution from "@/assets/gophr-mobile-evolution.png";
import gophrWireframes from "@/assets/gophr-wireframes.png";
import gophrCardSystem from "@/assets/gophr-card-system.png";
import gophrUserReviews from "@/assets/gophr-user-reviews.png";
import gophrCompetitorAnalysis from "@/assets/gophr-competitor-analysis.png";
import gophrUserInterviews from "@/assets/gophr-user-interviews.png";
import teamsHero from "@/assets/teams-hero.gif";
import teamsWorkNutshell from "@/assets/teams-work-nutshell.png";

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface ProjectSection {
  title: string;
  content: string;
  bullets?: string[];
  image?: string;
  galleryImages?: GalleryImage[];
  pullQuote?: {
    text: string;
    label?: string;
  };
}

export interface ProjectImpact {
  metric: string;
  value: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  role?: string;
  timeline?: string;
  tools?: string[];
  overview: string;
  solution: string;
  liveUrl?: string;
  images: string[];
  sections?: ProjectSection[];
  impacts?: ProjectImpact[];
  impactImage?: GalleryImage;
  reflection?: string;
  reflectionImages?: GalleryImage[];
}

export const projects: Project[] = [
  {
    id: "gophr-logistics",
    title: "Modernising Last-Mile Logistics for Scale",
    description: "Transforming a utilitarian booking tool into a transparent, trust-building logistics platform.",
    image: gophrHero,
    role: "Lead UX/UI Designer",
    timeline: "Jul 2022 – Dec 2022",
    tools: ["Figma", "Jira", "Miro", "Protopie"],
    overview: "As Gophr scaled to serve major clients like HelloFresh and ScrewFix, the platform was struggling to keep up. New customers faced a fragmented experience, resulting in an 8% retention rate and a flood of support tickets about late deliveries and 'invisible' couriers.",
    solution: "Transform a utilitarian booking tool into a transparent, trust-building logistics platform that optimises operational efficiency while giving customers total visibility.",
    liveUrl: "https://gophr.com",
    images: [gophrHero, gophrDashboard, gophrTracker],
    sections: [
      {
        title: "The Challenge",
        content: "High Churn in a High-Stakes Market",
        bullets: [
          "Low retention rate of 8%",
          "Flood of support requests regarding late deliveries and bugs",
          "Customers couldn't see where their courier was"
        ],
        pullQuote: {
          text: "Transform a utilitarian booking tool into a transparent, trust-building logistics platform.",
          label: "The Goal"
        }
      },
      {
        title: "Discovery & Research",
        content: "Uncovering the 'Trust Gap' — To understand why users were churning, I conducted a deep-dive audit:",
        bullets: [
          "200+ Customer Reviews: Analysed sentiment on TrustPilot/AppStore. The recurring theme wasn't just 'lateness' — it was anxiety. Users didn't know where their courier was.",
          "Heuristic Audit: Annotated every screen of the v1 Booking Engine, identifying friction points that made re-booking tedious.",
          "10 User Interviews: Spoke with SMEs and individual shippers."
        ],
        galleryImages: [
          { src: gophrUserReviews, alt: "User review analysis from Trustpilot and Google showing customer feedback about delivery issues, courier reliability, and app experience" },
          { src: gophrCompetitorAnalysis, alt: "Competitive analysis matrix comparing Postmates, DoorDash, Amazon Logistics, FedEx, and UPS across booking journey, navigation, job dashboard, and parcel tracking features" },
          { src: gophrUserInterviews, alt: "User interview sessions conducted via video calls with SME customers and individual shippers to understand pain points" }
        ],
        pullQuote: {
          text: "Users didn't mind a delay as much as they minded the silence. They needed control and proactive communication.",
          label: "Key Insight"
        }
      },
      {
        title: "Strategy & Definition",
        content: "Defining the 'Glass Box' Experience — I synthesised our findings into an empathy map that highlighted a critical need for 'radical transparency.' Working with Engineering and Ops in an Action Priority Matrix workshop, we defined our MVP pillars:",
        bullets: [
          "Visibility: Real-time map tracking with 'Uber-style' courier updates.",
          "Control: Modular booking flow allowing precise time windows.",
          "Efficiency: Smart auto-population for repeat business shippers."
        ]
      },
      {
        title: "Design & Iteration",
        content: "Building a Scalable System — I moved from low-fidelity paper sketches to a comprehensive Design System based on Material Design but adapted for Gophr's brand.",
        bullets: [
          "The 'Card' System: I designed a modular card UI for the dashboard. This allowed users to scan 50+ active jobs at once, using colour-coded status badges (Live, Draft, Scheduled) to parse urgency instantly.",
          "The Booking Engine: We replaced a long, static form with a modular step-by-step flow. Early testing showed users preferred this 'chunked' approach, which reduced cognitive load and errors.",
          "Mobile-First Tracking: Addressing the 'mobile UX' complaint, I designed a native-feeling mobile web view that put the map and courier contact details front-and-centre — no login required for recipients."
        ],
        image: gophrCards,
        galleryImages: [
          { src: gophrMobileEvolution, alt: "Mobile app UI evolution from V1 to V3, showing the progression of the Manage Jobs interface design" },
          { src: gophrWireframes, alt: "Low-fidelity wireframe sketches showing dashboard, menu, parcel details, and support ticket flows" },
          { src: gophrCardSystem, alt: "Card system design showing single delivery, multi-drop off, and job status states" }
        ]
      },
      {
        title: "Final Designs",
        content: "The Result: A Seamless Logistics Hub",
        bullets: [
          "Smart Dashboard: A centralised view categorising jobs by status, reducing the time to find a specific delivery by half.",
          "Transparent Tracker: A public tracking link that shows the courier's live location and ETA, dramatically reducing 'Where is my parcel?' support tickets.",
          "Automated Invoicing: A dedicated portal for enterprise clients to manage spend and reporting without contacting account managers."
        ],
        image: gophrDashboard,
        galleryImages: [
          { src: gophrDashboard, alt: "Smart dashboard showing centralised job management view with status categorisation" },
          { src: gophrTracker, alt: "Live tracking interface showing courier location and delivery ETA" },
          { src: gophrInvoices, alt: "Automated invoicing portal for enterprise spend management" },
          { src: gophrCards, alt: "Modular card UI with colour-coded status badges for quick job scanning" },
          { src: gophrHero, alt: "Gophr platform hero showing the complete logistics management interface" }
        ]
      }
    ],
    impacts: [
      { metric: "Trust", value: "3.2 → 4.3", description: "Trustpilot rating" },
      { metric: "Efficiency", value: "47%", description: "Reduction in support enquiries regarding delivery status" },
      { metric: "Mobile Visits", value: "+62%", description: "Increase in mobile traffic" },
      { metric: "Success Rate", value: "+85%", description: "Successful first-attempt deliveries" }
    ],
    impactImage: { src: gophrTrustpilot, alt: "Trustpilot rating improved from 3.2 to 4.3 stars, with customer reviews praising Gophr's easy-to-use website, real-time courier tracking, and excellent service" },
    reflection: "This project taught me that in logistics, 'UX' isn't just about pixels — it's about peace of mind. By focusing on visibility, we didn't just fix a tool; we rebuilt trust between Gophr and its customers.",
    reflectionImages: [
      { src: gophrTrustpilot, alt: "Customer reviews analysis showing improved Trustpilot ratings and sentiment" },
      { src: gophrInvoices, alt: "Enterprise invoicing portal demonstrating automated spend management" }
    ]
  },
  {
    id: "microsoft-teams-ecosystem",
    title: "Scaling the Microsoft Teams Partner Ecosystem",
    description: "Empowering major partners (ISVs) to build high-quality, native-feeling apps directly within Teams.",
    image: teamsHero,
    role: "Senior UX & Interaction Designer",
    timeline: "Nov 2022 – Dec 2023",
    tools: ["Figma", "MS Teams", "ProtoPie"],
    overview: "Following the pandemic, Microsoft Teams exploded in usage, but users were constantly switching contexts—jumping between Teams and external tools like Asana or Mural. The challenge was to transform Teams from a communication tool into a centralized operating system for work.",
    solution: "Empower major partners (ISVs) to build high-quality, native-feeling apps directly within Teams, ensuring they met Microsoft's rigorous standards while solving complex user needs in Healthcare, EDU, and Enterprise sectors.",
    images: [teamsHero, teamsWorkNutshell],
    sections: [
      {
        title: "The Challenge",
        content: "Unlocking the Platform's Potential",
        bullets: [
          "Users constantly switching contexts—jumping between Teams and external tools like Asana or Mural",
          "Need to transform Teams from a communication tool into a centralized operating system for work",
          "Partners required guidance to meet Microsoft's rigorous standards while solving complex user needs"
        ],
        pullQuote: {
          text: "Empower major partners (ISVs) to build high-quality, native-feeling apps directly within Teams.",
          label: "The Goal"
        }
      },
      {
        title: "My Role & Approach",
        content: "The Bridge Between Partners and Platform — I acted as the lead design consultant and execution arm for strategic partners including U.S. Bank, Shopify, Mural, UberEATS, Starbucks, and Asana. My role was twofold:",
        bullets: [
          "Strategic Translation: I worked directly with partner stakeholders to translate their standalone product requirements into Teams-native constructs (Bots, Tabs, Messaging Extensions).",
          "System Governance: I ensured every integration adhered to the Fluent 2.0 Design System, guaranteeing accessibility (WCAG 2.1) and a seamless 'one-Microsoft' feel."
        ]
      },
      {
        title: "Discovery & Process",
        content: "Discovery & Requirements — For complex integrations like U.S. Bank, I led workshops to map their proprietary banking flows to Teams' improved security architecture. We identified high-friction points where users dropped off and replaced them with Adaptive Cards—allowing users to approve transactions or view balances without leaving the chat.",
        bullets: [
          "Messaging Extensions: Designed flows for UberEATS and Starbucks that allowed employees to coordinate lunch orders directly inside a channel thread.",
          "Meeting Extensions: Created collaborative whiteboard experiences for Mural, enabling real-time co-creation during video calls.",
          "Personal Apps: Built dashboard views for Asana and Shopify, giving users a personalized 'cockpit' of their tasks and store metrics pinned to their Teams sidebar."
        ],
        image: teamsWorkNutshell,
        pullQuote: {
          text: "I utilized the full breadth of the Teams Platform capabilities to create 'micro-apps' designed with Fluent 2.0.",
          label: "Designing with Fluent 2.0"
        }
      },
      {
        title: "Overcoming Constraints",
        content: "A core challenge was balancing the partner's brand identity with Microsoft's strict UI guidelines.",
        bullets: [
          "The Problem: Partners often wanted custom UI that broke accessibility or consistency rules.",
          "The Solution: I created a 'Design Guidance' framework. This toolkit educated partners on why we use specific Fluent components (e.g., standardising distinct focus states for keyboard navigation), reducing development time and ensuring a 95% first-pass validation rate for the Teams Store."
        ],
        pullQuote: {
          text: "The Design Guidance framework reduced development time and ensured a 95% first-pass validation rate for the Teams Store.",
          label: "The Crux"
        }
      }
    ],
    impacts: [
      { metric: "Scale", value: "20+", description: "Enterprise-grade integrations delivered" },
      { metric: "Platform Growth", value: "160%", description: "Increase in apps created on platform" },
      { metric: "Engagement", value: "3x", description: "Increase in Daily Active Users (DAU)" },
      { metric: "TrustPilot", value: "4.1★", description: "Improved platform rating" }
    ],
    reflection: "Due to strict NDA constraints, I cannot publicly display specific financial or internal dashboard designs. However, I can walk through generalized 'white-label' workflows and my specific contribution to the Fluent design adoption process in a private interview."
  },
  {
    id: "design-with-icons",
    title: "Design with Icons That Stand Out",
    description: "A comprehensive icon library for modern interfaces with customisable styles.",
    image: project1,
    overview: "A comprehensive icon library designed for modern digital interfaces. The project aimed to create versatile, scalable icons that maintain visual consistency across different platforms and screen sizes.",
    solution: "The solution involved creating a modular icon system with multiple style variants. Each icon was designed on a consistent grid, ensuring pixel-perfect alignment and seamless integration into any design system.",
    images: [project1, project2, project3],
  },
  {
    id: "discover-nature",
    title: "Discover The Beauty Of Nature",
    description: "E-commerce platform designed for outdoor enthusiasts with seamless checkout flows.",
    image: project3,
    overview: "An e-commerce platform crafted for outdoor enthusiasts. The project focused on creating an immersive shopping experience that reflects the beauty and adventure of nature.",
    solution: "The solution features a clean, nature-inspired design with intuitive navigation and seamless checkout flows. High-quality imagery and thoughtful micro-interactions enhance the overall user experience.",
    images: [project3, project1, project2],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
