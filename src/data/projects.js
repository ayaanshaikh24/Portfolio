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
    id: "record-house",
    title: "Record House: Vintage Vinyls & Analog Catalog",
    tagline: "Curated physical music archiving platform & analog catalog system",
    description: "Engineered an interactive digital catalog and collection platform for Record House (Estd. 1975). Features deep genre filtering across 400+ vinyl, CD, and cassette releases, structured Schema.org SEO metadata, and universal inquiry workflows.",
    image: "/images/projects/project3.png", // Record House platform preview
    features: [
      "Developed an interactive catalog browser with dynamic genre filtering across 10+ music categories",
      "Built a streamlined universal enquiry modal with client validation and automated contact routing",
      "Implemented high-performance image optimization, Schema.org LocalBusiness SEO, and accessible UI"
    ],
    tech: ["JavaScript (ES6+)", "HTML5", "CSS3 / Sass", "Schema.org SEO", "Vercel"],
    category: "Web Application",
    github: "https://github.com/ayaanshaikh24/Record-House",
    demo: "https://recordhouse.vercel.app/",
    featured: false,
    isPlaceholder: false
  }
];
