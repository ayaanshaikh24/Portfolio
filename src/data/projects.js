export const projects = [
  {
    id: "pricewise-ai",
    title: "PriceWiseAI: Smart Shopping System",
    tagline: "Intelligent product comparison & real-time analytics dashboard",
    description: "Built a full-stack MERN application enabling online customers to use a simple, clean UI-based product comparison tool. Features automated web scraping, price tracking, and actionable insights.",
    image: "/images/projects/pricewise.png", // TODO: Ayaan, replace with your actual project screenshot
    features: [
      "Implemented multiple APIs and built a custom router and scraper for product scraping",
      "Designed a real-time responsive dashboard for product updates and price trends",
      "Engineered automated notifications and user review analysis workflows"
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "REST APIs"],
    category: "Full-Stack (MERN)",
    github: "https://github.com/ayaanshaikh24/miniproject1",
    demo: "https://pricewiseai.netlify.app/",
    featured: true,
    isPlaceholder: false
  },
  {
    id: "infytion-enterprise",
    title: "Infytion: Enterprise Architecture & Platform",
    tagline: "Architecture-first digital platforms, edge APIs & interactive 3D UI",
    description: "Architected and developed a modern enterprise digital platform for Infytion, featuring an architecture-first engineering approach with high-performance edge APIs, interactive 3D WebGL graphics, and modular multi-industry solution suites.",
    image: "/images/projects/project2.png", // Infytion platform preview
    features: [
      "Engineered responsive architecture with comprehensive solution suites (FinTech, HealthTech, Logistics)",
      "Integrated interactive 3D WebGL canvas graphics and smooth micro-interactions for high engagement",
      "Designed scalable modular component hierarchies with Next.js, TypeScript, and modern edge infrastructure"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WebGL", "Edge APIs"],
    category: "Enterprise Web App",
    github: "https://github.com/ayaanshaikh24/Infytion",
    demo: "https://ltech-xi.vercel.app/",
    featured: false,
    isPlaceholder: false
  },
  {
    id: "project-placeholder-3",
    title: "Real-Time Collaborative Workspace", // TODO: Ayaan, replace with your 3rd project title
    tagline: "High-concurrency collaborative suite with live updates",
    description: "Web application featuring synchronized real-time document editing, instant team messaging, and automated project milestone tracking.",
    image: "/images/projects/project3.png", // TODO: Replace with your project screenshot
    features: [
      "WebSocket-driven live sync engine with sub-50ms latency",
      "Role-based access control with granular project permissions",
      "Interactive data visualization charts and activity logs"
    ],
    tech: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    category: "Web Application",
    github: "https://github.com/Git-ayaanshaikh24", // TODO: Update with your repo link
    demo: "#", // TODO: Update with live demo URL
    featured: false,
    isPlaceholder: true // Marked as placeholder for Ayaan to customize
  }
];
