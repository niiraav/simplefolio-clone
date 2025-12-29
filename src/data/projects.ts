import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  overview: string;
  solution: string;
  liveUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "aero-landing-page-design",
    title: "Aero Landing page design",
    description: "This project focuses on the design and development of a comprehensive AI chatbot platform, Aero.",
    image: project2,
    overview: "This project focuses on the design and development of a comprehensive AI chatbot platform, Aero. The goal was to create a modern, intuitive user experience that combines functionality with a sleek, professional design.",
    solution: "To meet the needs of Aero's users, the design solution focused on a balance of user-centric functionality and visual appeal. The interface prioritizes clarity and ease of use while maintaining a sophisticated aesthetic.",
    liveUrl: "https://sprrrint.com/",
    images: [project2, project1, project3],
  },
  {
    id: "design-with-icons",
    title: "Design with Icons That Stand Out",
    description: "A comprehensive icon library for modern interfaces with customizable styles.",
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
