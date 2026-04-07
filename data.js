// ===================================
// CENTRALIZED WEBSITE DATA
// Update this file to change content across the entire website
// ===================================

const websiteData = {
    // Brand Information
    brand: {
        name: "azohi.site",
        tagline: "Building Amazing Digital Products",
        description: "Explore our collection of Chrome Extensions, Open Source Projects, and Custom Software Solutions crafted with passion and precision.",
        email: "zohaibnawaz.dev@gmail.com",
        website: "www.azohi.site",
        linkedin: "linkedin.com/in/zohaibnawaz-dev",
        copyright: "2026"
    },

    // Navigation Links
    navigation: [
        { label: "Home", href: "index.html" },
        { label: "Extensions", href: "extensions.html" },
        { label: "Open Source", href: "opensource.html" },
        { label: "Services", href: "services.html" },
        { label: "About", href: "about.html" },
        { label: "Contact", href: "index.html#contact" }
    ],

    // Chrome Extensions
    extensions: [
        {
            id: "seo-analyzer",
            title: "SEO Analyzer Pro",
            description: "Comprehensive SEO analysis tool that provides real-time insights and optimization suggestions for any webpage.",
            image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=250&fit=crop",
            features: [
                "Real-time SEO scoring",
                "Meta tag analysis",
                "Performance metrics",
                "Actionable recommendations"
            ],
            chromeStoreLink: "#",
            learnMoreLink: "#"
        },
        {
            id: "focus-timer",
            title: "Focus Timer",
            description: "Stay productive with Pomodoro technique, time tracking, and detailed analytics to optimize your workflow.",
            image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=250&fit=crop",
            features: [
                "Pomodoro timer",
                "Task tracking",
                "Productivity analytics",
                "Custom notifications"
            ],
            chromeStoreLink: "#",
            learnMoreLink: "#"
        },
        {
            id: "color-picker",
            title: "Smart Color Picker",
            description: "Advanced color extraction and palette generation tool for designers and developers.",
            image: "https://images.unsplash.com/photo-1502691876148-a84978e59af8?w=400&h=250&fit=crop",
            features: [
                "Eye dropper tool",
                "Palette generator",
                "Color format conversion",
                "Export palettes"
            ],
            chromeStoreLink: "#",
            learnMoreLink: "#"
        },
        {
            id: "password-manager",
            title: "Secure Password Manager",
            description: "Generate, store, and auto-fill passwords securely with military-grade encryption.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
            features: [
                "Password generation",
                "Auto-fill forms",
                "Encrypted storage",
                "Breach alerts"
            ],
            chromeStoreLink: "#",
            learnMoreLink: "#"
        },
        {
            id: "tab-manager",
            title: "Tab Manager Plus",
            description: "Organize, search, and manage your browser tabs efficiently with workspaces and session saving.",
            image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=250&fit=crop",
            features: [
                "Tab grouping",
                "Session saving",
                "Search tabs",
                "Memory optimization"
            ],
            chromeStoreLink: "#",
            learnMoreLink: "#"
        },
        {
            id: "screenshot-tool",
            title: "Advanced Screenshot Tool",
            description: "Capture full-page, visible, or selected area screenshots with annotation and editing features.",
            image: "https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?w=400&h=250&fit=crop",
            features: [
                "Full-page capture",
                "Annotation tools",
                "Cloud storage",
                "Share instantly"
            ],
            chromeStoreLink: "#",
            learnMoreLink: "#"
        }
    ],

    // Open Source Projects
    openSource: [
        {
            id: "react-components",
            title: "React Component Library",
            description: "A comprehensive collection of customizable, accessible React components for modern web applications.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
            techStack: ["React", "TypeScript", "Storybook"],
            stars: "1.2k",
            forks: "234",
            githubLink: "#",
            docsLink: "#"
        },
        {
            id: "dev-cli",
            title: "Dev CLI Toolkit",
            description: "Powerful command-line interface toolkit for automating development workflows and boosting productivity.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
            techStack: ["Node.js", "Commander", "CLI"],
            stars: "856",
            forks: "142",
            githubLink: "#",
            docsLink: "#"
        },
        {
            id: "api-boilerplate",
            title: "Node.js API Boilerplate",
            description: "Production-ready Node.js API starter with authentication, database integration, and best practices built-in.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
            techStack: ["Express", "MongoDB", "JWT"],
            stars: "2.1k",
            forks: "478",
            githubLink: "#",
            docsLink: "#"
        },
        {
            id: "vue-dashboard",
            title: "Vue.js Admin Dashboard",
            description: "Beautiful and responsive admin dashboard template built with Vue.js and modern UI components.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
            techStack: ["Vue.js", "Vuex", "Tailwind"],
            stars: "945",
            forks: "189",
            githubLink: "#",
            docsLink: "#"
        },
        {
            id: "python-automation",
            title: "Python Automation Scripts",
            description: "Collection of useful Python scripts for web scraping, file management, and task automation.",
            image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop",
            techStack: ["Python", "Selenium", "BeautifulSoup"],
            stars: "1.5k",
            forks: "312",
            githubLink: "#",
            docsLink: "#"
        },
        {
            id: "docker-starter",
            title: "Docker Starter Kit",
            description: "Complete Docker configuration for modern web applications with development and production setups.",
            image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=250&fit=crop",
            techStack: ["Docker", "Docker Compose", "Nginx"],
            stars: "678",
            forks: "145",
            githubLink: "#",
            docsLink: "#"
        }
    ],

    // Custom Solutions
    solutions: [
        {
            id: "ecommerce-dashboard",
            title: "E-commerce Dashboard",
            description: "Complete analytics and management dashboard for online stores with real-time insights and reporting.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
            features: [
                "Sales analytics",
                "Inventory tracking",
                "Customer insights",
                "Automated reports"
            ],
            demoLink: "#",
            contactLink: "#"
        },
        {
            id: "inventory-system",
            title: "Inventory Management System",
            description: "Streamline your inventory operations with automated tracking, alerts, and comprehensive reporting.",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
            features: [
                "Real-time tracking",
                "Low stock alerts",
                "Multi-location support",
                "Barcode scanning"
            ],
            demoLink: "#",
            contactLink: "#"
        },
        {
            id: "crm-platform",
            title: "Custom CRM Platform",
            description: "Flexible customer relationship management system tailored to your business processes and workflows.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
            features: [
                "Contact management",
                "Pipeline tracking",
                "Email integration",
                "Custom workflows"
            ],
            demoLink: "#",
            contactLink: "#"
        }
    ],

    // Services
    services: [
        {
            id: "web-development",
            title: "Web Development",
            description: "Custom web applications built with modern frameworks and best practices for performance and scalability.",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&fit=crop",
            features: [
                "Responsive design",
                "Modern frameworks",
                "Performance optimization",
                "SEO friendly"
            ],
            icon: "🌐"
        },
        {
            id: "chrome-extensions",
            title: "Chrome Extension Development",
            description: "Custom browser extensions tailored to your specific needs with seamless Chrome Store integration.",
            image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=250&fit=crop",
            features: [
                "Custom functionality",
                "Chrome Store publishing",
                "User analytics",
                "Regular updates"
            ],
            icon: "🧩"
        },
        {
            id: "api-development",
            title: "API Development",
            description: "Robust and scalable RESTful APIs and GraphQL endpoints for your applications and services.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop",
            features: [
                "REST & GraphQL",
                "Authentication & Security",
                "Documentation",
                "Scalable architecture"
            ],
            icon: "⚙️"
        },
        {
            id: "ui-ux-design",
            title: "UI/UX Design",
            description: "Beautiful and intuitive user interfaces designed with user experience as the top priority.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop",
            features: [
                "User research",
                "Wireframing & Prototyping",
                "Visual design",
                "Usability testing"
            ],
            icon: "🎨"
        },
        {
            id: "consulting",
            title: "Technical Consulting",
            description: "Expert guidance on technology stack selection, architecture decisions, and development best practices.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
            features: [
                "Architecture review",
                "Technology assessment",
                "Best practices",
                "Team mentoring"
            ],
            icon: "💡"
        },
        {
            id: "maintenance",
            title: "Maintenance & Support",
            description: "Ongoing maintenance, updates, and technical support to keep your applications running smoothly.",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
            features: [
                "24/7 monitoring",
                "Bug fixes",
                "Performance tuning",
                "Security updates"
            ],
            icon: "🔧"
        }
    ],

    // About Information
    about: {
        headline: "Passionate About Building Digital Excellence",
        description: "We are a team of dedicated developers and designers committed to creating innovative digital solutions that make a difference. With years of experience in web development, browser extensions, and open source contributions, we bring expertise and passion to every project.",
        mission: "To empower businesses and developers with high-quality software solutions that drive growth and innovation.",
        vision: "To become a leading force in creating accessible, impactful technology that transforms how people work and interact online.",
        stats: [
            { label: "Projects Completed", value: "50+" },
            { label: "Chrome Extensions", value: "15+" },
            { label: "Open Source Repos", value: "20+" },
            { label: "Happy Clients", value: "30+" }
        ],
        values: [
            {
                title: "Innovation",
                description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.",
                icon: "🚀"
            },
            {
                title: "Quality",
                description: "Every line of code is crafted with attention to detail and adherence to best practices.",
                icon: "✨"
            },
            {
                title: "Collaboration",
                description: "We believe in the power of community and actively contribute to open source projects.",
                icon: "🤝"
            },
            {
                title: "Impact",
                description: "Our solutions are designed to make a real difference in how people work and live.",
                icon: "🎯"
            }
        ],
        team: [
            {
                name: "Zohaib Nawaz",
                role: "Founder & Lead Developer",
                bio: "Full-stack developer with expertise in web technologies, browser extensions, and cloud architecture.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                social: {
                    github: "#",
                    linkedin: "#",
                    twitter: "#"
                }
            }
        ]
    },

    // Social Links
    social: [
        { name: "GitHub", url: "#" },
        { name: "LinkedIn", url: "#" },
        { name: "Twitter", url: "#" }
    ]
};

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = websiteData;
}
