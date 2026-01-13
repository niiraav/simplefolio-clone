import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import buzzbingoLogo from "@/assets/buzzbingo-logo.png";
import buzzbingoCover from "@/assets/buzzbingo-cover.png";
import buzzbingoHeroScreens from "@/assets/buzzbingo-hero-screens.png";
import buzzbingoCompetitiveAnalysis from "@/assets/buzzbingo-competitive-analysis.png";
import buzzbingoUserFlow from "@/assets/buzzbingo-user-flow.png";
import gophrHero from "@/assets/gophr-hero.png";
import gophrCover from "@/assets/gophr-cover.png";
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
import worldpayHero from "@/assets/worldpay-hero.png";
import worldpayCover from "@/assets/worldpay-cover.png";
import worldpayModal from "@/assets/worldpay-modal.png";
import worldpayContractDetails from "@/assets/worldpay-contract-details.png";
import worldpaySign from "@/assets/worldpay-sign.png";

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
  heroCarouselImages?: GalleryImage[];
  sections?: ProjectSection[];
  impacts?: ProjectImpact[];
  impactImage?: GalleryImage;
  reflection?: string;
  reflectionImages?: GalleryImage[];
}

export const projects: Project[] = [
  {
    id: "worldpay-contract-renewals",
    title: "Simplifying Merchant Renewals",
    description: "Transforming a high-friction, offline negotiation into a seamless digital experience where merchants could review terms and legally sign in clicks, not hours.",
    image: worldpayCover,
    role: "Lead Product Designer (Worldpay dMPX)",
    timeline: "14 weeks (March–June 2025)",
    tools: ["Figma", "DocuSign", "Jira", "Miro"],
    overview: "For years, Worldpay's SMB merchants faced a fragmented, manual renewal process. When a contract ended, there was no digital path to renew—only a forced, 7-10 minute phone call with an agent.",
    solution: "Transform a high-friction, offline negotiation into a seamless digital experience where merchants could review terms and legally sign in clicks, not hours.",
    images: [worldpayHero],
    heroCarouselImages: [
      { src: worldpayModal, alt: "Renewal offer modal showing lower transaction rates and reduced rental savings" },
      { src: worldpayContractDetails, alt: "Contract details step showing contract summary and merchant details" },
      { src: worldpaySign, alt: "Review and sign step with DocuSign integration and agreement forms" }
    ],
    sections: [
      {
        title: "The Challenge",
        content: "Friction at the Point of Renewal",
        bullets: [
          "The Trust Gap: The lack of fixed, visible pricing created 'Comparison Anxiety.' Merchants often suspected they weren't getting the best deal, leading to hesitation and suspicion.",
          "The Operational Cost: Worldpay agents were forced to manually dial outbound calls for every expiring contract. Over 700+ monthly support tickets were dedicated solely to 'What has changed in my contract?'"
        ],
        pullQuote: {
          text: "Transform a high-friction, offline negotiation into a seamless digital experience where merchants could review terms and legally sign in clicks, not hours.",
          label: "The Goal"
        }
      },
      {
        title: "Discovery & Strategy",
        content: "Uncovering the 'Black Box' — Collaborating with UX Research under the dMPX framework, we conducted 8 merchant interviews and analysed 12 months of data.",
        bullets: [
          "Key Insight: 'I never know when my contract is expiring until I get a call. By then, I'm scrambling.' — Retail Merchant",
          "The Strategic Shift: We realised the solution wasn't just a 'Sign Here' button—it had to be a proactive communication strategy that engaged merchants before the deadline."
        ],
        pullQuote: {
          text: "I never know when my contract is expiring until I get a call. By then, I'm scrambling.",
          label: "Merchant Interview"
        }
      },
      {
        title: "The 'Value-First' Notification Strategy",
        content: "To combat 'last-minute panic,' I devised a 30-14-1 day notification cadence. Instead of generic 'Expiring Soon' alerts, each touchpoint was designed to reinforce value before asking for a commitment:",
        bullets: [
          "Day 30 (Value): 'See how Worldpay has supported your business this year' (Relationship building).",
          "Day 14 (Offer): 'Your exclusive renewal offer is ready to view' (Transparency).",
          "Day 1 (Urgency): 'Final reminder: Lock in your rate today' (Action)."
        ],
        pullQuote: {
          text: "During ideation, we explored a 'Blue Sky' concept using smart contracts for auto-renewal based on transaction health. While this was our 'North Star' for a zero-friction future, immediate legal consent requirements demanded a manual interaction.",
          label: "Strategic Vision"
        }
      },
      {
        title: "The Solution",
        content: "A Hybrid Architecture for Complex Decisions — We rejected a 'one-size-fits-all' approach. Instead, I designed a Hybrid Architecture to balance focus with friction:",
        bullets: [
          "The Hook (Modal): A focused, interruptive modal presents the high-level offer (e.g., 'Rate locked for 12 months'). This grabs attention without a full context switch.",
          "The Work (Full Page Journey): Engaging the offer transitions the user to a dedicated Review → Payment → Sign flow. This provided the screen real estate needed for complex legal comparison.",
          "'Diff Table' vs. PDF Scroll: Instead of forcing users to parse a dense PDF, I designed a comparison table that visually highlighted only the changes (e.g., Term Length, monthly price and breakdown and critical user details for review).",
          "Embedded DocuSign: To solve authentication constraints, I implemented an embedded DocuSign integration. This kept merchants inside the trusted Worldpay dashboard rather than bouncing them to an external email thread.",
          "Proactive Triage: We implemented a 30-14-1 day notification strategy, creating a natural sense of urgency that respected the merchant's time."
        ]
      },
      {
        title: "Execution & Validation",
        content: "Iterating Based on Data (n=8 Usability Tests) — Testing revealed an average completion time of 2 minutes (down from 10+), but uncovered two critical issues that I solved in the final design:",
        bullets: [
          "Solving 'Sticker Shock': Early testing showed that presenting complex annual totals caused hesitation. I redesigned the financial summary to match the SMB mental model of monthly cash flow.",
          "Monthly Anchor: Displayed a clear £16.50/mo anchor price with a dynamic 'You save an estimated £[Amount]' label.",
          "The 'Locked Data' Escape Hatch: Users who spotted errors in pre-populated legal data felt 'trapped.' I added a prominent 'Need to make changes?' block with a specific support path.",
          "The 'Discrepancy' Panic: The contract generated by the backend often shows the standard terminal hire fee (e.g., £20), while the offer is a promotional £1. I added a Context Banner explaining why the numbers differ."
        ]
      }
    ],
    impacts: [
      { metric: "Speed", value: "40%", description: "Reduction in renewal completion time (Avg 3.2 days vs. 5+ days)" },
      { metric: "Efficiency", value: "35%", description: "Decrease in renewal-related support tickets (from 450 to 290 monthly)" },
      { metric: "Retention", value: "82%", description: "Same-cycle completion rate, exceeding the 75% target" },
      { metric: "NPS", value: "42 → 68", description: "Improved Net Promoter Score" },
      { metric: "Savings", value: "$180k", description: "Estimated annual savings based on reduced support handling time" }
    ],
    reflection: "Account managers reported spending 60% less time on routine renewal coordination. This project demonstrated that digitising legacy processes isn't just about moving forms online—it's about understanding the emotional journey of high-stakes decisions and designing transparency into every step."
  },
  {
    id: "gophr-logistics",
    title: "Modernising Last-Mile Logistics for Scale",
    description: "Transforming a utilitarian booking tool into a transparent, trust-building logistics platform.",
    image: gophrCover,
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
    reflection: "Due to strict NDA constraints, I cannot publicly display specific financial or internal dashboard designs. However, I can walk through generalised 'white-label' workflows and my specific contribution to the Fluent design adoption process in a private interview."
  },
  {
    id: "buzz-bingo-app",
    title: "Modernising a Legacy Bingo App for All Ages",
    description: "Redesigning a new Bingo Buddy app — Transforming a buggy experience into an accessible, self-service platform for users aged 25-70.",
    image: buzzbingoCover,
    role: "Senior UX/UI Designer",
    timeline: "12 Weeks (July – September 2019)",
    tools: ["Figma", "InVision Freehand", "UserZoom", "Notion", "ProtoPie"],
    overview: "Buzz Bingo, one of the UK's largest bingo operators (WhichBingo's Best Bingo Site of the Year), had a mobile app problem. The legacy Bingo Buddy app was plagued by bugs, crashes, and a confusing navigation system that frustrated users aged 25-70—a demographic that demanded both simplicity and accessibility.",
    solution: "Transform the legacy app into an accessible, self-service platform that allows users to manage their accounts (wallet top-ups, voucher redemption, session discovery) without ever leaving their bingo table.",
    images: [buzzbingoCover],
    sections: [
      {
        title: "The Challenge (Situation)",
        content: "A Buggy Experience Hurting Retention — Club visitors couldn't top up their accounts or redeem vouchers without leaving their seats to queue at the checkout counter. This disrupted their gaming experience and created operational bottlenecks during peak hours.",
        bullets: [
          "Complex, unpredictable navigation that confused users",
          "Poor content hierarchy making information difficult to scan",
          "Bugs causing slowness and occasional crashes",
          "Needlessly complicated user journeys for simple tasks"
        ],
        pullQuote: {
          text: "Transform the legacy app into an accessible, self-service platform that allows users to manage their accounts without ever leaving their bingo table.",
          label: "The Goal"
        }
      },
      {
        title: "Discovery & Research",
        content: "Uncovering the 'Queue Anxiety' — To understand the friction points, I conducted a multi-phase discovery process including a heuristic audit, user interviews, and competitive analysis.",
        bullets: [
          "Heuristic Audit: I screenshotted every UI in the app and annotated usability concerns, stakeholder questions, and improvement ideas.",
          "User Interviews (n=8): Over one week, I interviewed customers aged 25-70 about their in-club experience via phone and video calls.",
          "Key Insight: 'I hate missing my game to wait in line.' The queue wasn't just inconvenient—it caused anxiety about missing numbers during active games.",
          "Jakob's Law in Action: Users expected the app to work like other familiar apps (banking, food delivery). When it didn't, they lost trust.",
          "Age Diversity = Accessibility Priority: With users spanning 45 years of age range, accessibility (large touch targets, high contrast, clear iconography) wasn't optional—it was critical."
        ],
        galleryImages: [
          { src: buzzbingoHeroScreens, alt: "4-screen hero shot showing Home, Sessions, Promotions and Wallet screens" },
          { src: buzzbingoCompetitiveAnalysis, alt: "Competitive analysis board showing wallet flows from banking and entertainment apps" },
          { src: buzzbingoUserFlow, alt: "User flow diagram showing app navigation structure from onboarding through wallet, vouchers and promotions" }
        ],
        pullQuote: {
          text: "I hate missing my game to wait in line.",
          label: "User Interview Insight"
        }
      },
      {
        title: "Strategy & Definition",
        content: "Defining the 'Frictionless Club Experience' — I synthesised findings into a clear strategy with three design pillars: Accessibility First (design for ages 25-70 with WCAG 2.1 compliance), Self-Service (enable wallet top-ups, voucher redemption, and session booking without staff assistance), and Familiar Patterns (follow Jakob's Law—use conventions from widely-adopted apps).",
        bullets: [
          "Unified wallet system replacing fragmented balance views",
          "Streamlined voucher redemption flow",
          "Enhanced session discovery with filters (date, time, location)",
          "Upgrade path for legacy users migrating to the new backend"
        ],
        galleryImages: [
          { src: "/placeholder.svg", alt: "Before/After Information Architecture sitemap" }
        ],
        pullQuote: {
          text: "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
          label: "Jakob's Law"
        }
      },
      {
        title: "Execution: Building a Living Design System",
        content: "Rather than just 'redesigning screens,' I created a scalable design system to future-proof the product.",
        bullets: [
          "Typography: I selected Qanelas Soft, a typeface with extensive documentation for legibility and accessibility across age groups.",
          "Iconography: I used Material Design icons to maximise recognisability across languages and backgrounds.",
          "Component Library: I built reusable components (buttons, cards, navigation bars) that reduced design-to-dev handoff time by 60%."
        ],
        galleryImages: [
          { src: "/placeholder.svg", alt: "Style guide showing typography scale, colour system, and icon library" }
        ]
      },
      {
        title: "Iterating Based on Usability Testing",
        content: "I conducted moderated testing via UserZoom, starting with low-fidelity wireframes and progressing to high-fidelity prototypes. Each iteration addressed specific failure points:",
        bullets: [
          "Iteration 1 — The 'Hidden Navigation' Fix: Increased the size and contrast of the bottom nav bar, adding label text beneath icons.",
          "Iteration 2 — The 'Top-Up Confusion' Fix: Redesigned the flow as a linear, step-by-step journey with clear progress indicators.",
          "Iteration 3 — The 'Balance Visibility' Fix: Added a persistent balance indicator in the app header, visible from any screen.",
          "Iteration 4 — The 'Upgrade Messaging' Fix: Designed a full-screen, benefit-focused onboarding modal that explained the upgrade value proposition.",
          "Iteration 5 — The 'Daub Interaction' Delight: Added a tactile 'daub' interaction with haptic feedback and sound effects, recreating the physical dauber experience."
        ],
        galleryImages: [
          { src: "/placeholder.svg", alt: "Wireframe progression showing navigation iterations" },
          { src: "/placeholder.svg", alt: "Interactive prototype showing daub animation" }
        ]
      },
      {
        title: "Final Designs",
        content: "A Self-Service Bingo Hub — The redesigned app transformed the club experience by putting control in users' hands.",
        bullets: [
          "Home Screen: Personalised greeting, session times, jackpot cards, quick access to key features",
          "Vouchers Screen: Visual cards with clear expiry dates, filters (View all, Your club, Saved)",
          "Wallet Screen: Large balance display (£4,720.00), quick top-up buttons, recent transactions",
          "Promotions Screen: Bold visual cards with clear CTAs and engaging imagery",
          "Quick Top-Up: Preset amounts (£10, £20, £50, £100) eliminated form friction for repeat users",
          "Session Discovery: Filters by date, time, and location replaced endless scrolling",
          "Social Features: Recent winners board and friend connections increased engagement"
        ],
        galleryImages: [
          { src: "/placeholder.svg", alt: "4-screen hero shot showing Home, Vouchers, Wallet, and Promotions screens" },
          { src: "/placeholder.svg", alt: "Mobile screens showing session discovery filters and social features" }
        ]
      }
    ],
    impacts: [
      { metric: "DAU", value: "3x", description: "Increase in Daily Active Users" },
      { metric: "App Growth", value: "160%", description: "Overall app growth post-launch" },
      { metric: "Efficiency", value: "60%", description: "Faster design-to-dev time due to living design system" }
    ],
    impactImage: { src: "/placeholder.svg", alt: "Metrics dashboard or before/after comparison chart" },
    reflection: "The living design system was the project's secret weapon. By investing time upfront in reusable components, we accelerated every subsequent phase and ensured consistency across all screens.\n\nWhat I'd Do Differently:\n\n1. Accessibility from Day One — I audited for accessibility after initial designs, which created rework. In future projects, I'd include users with cognitive and physical disabilities in early-stage personas and testing.\n\n2. Search Analytics — I would use search analytics to reveal what users search for but can't find in navigation. This data would inform information architecture decisions earlier in the process.\n\n3. Quantitative Baselines — Whilst we tracked DAU growth post-launch, I wish we'd established clearer pre-launch baselines for support ticket volume and task completion times to strengthen our impact story."
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
