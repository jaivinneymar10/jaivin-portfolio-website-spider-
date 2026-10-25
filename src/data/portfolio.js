export const profile = {
  name: "Jaivin A.",
  role: "Full Stack Developer & UI/UX Designer",
  location: "Avadi, Chennai, India",
  email: "jaijaivin2004@gmail.com",
  phone: "",
  summary:
    "I turn thoughtful ideas into intuitive digital experiences—bringing together design, code, and a curiosity for how things work.",
  philosophy:
    "I enjoy connecting the dots between what people need and what technology can do. I plan the flow, explore screens, and then build experiences that feel clear, useful, and human.",
  socials: {
    github: "",
    linkedin: "",
    instagram: ""
  }
};

export const stats = [
  ["03", "Internship experiences", "Learning through design, development, and data"],
  ["03", "Featured projects", "UI/UX, product dashboards, and AI concepts"],
  ["06", "Skill groups", "A growing toolkit across design and engineering"],
  ["02", "Education milestones", "Computer Science and Engineering"]
];

export const education = [
  {
    year: "Degree",
    title: "B.E. — Computer Science and Engineering",
    place: "Sriram Engineering College, Tiruvallur",
    detail: "Score: 7.9"
  },
  {
    year: "Diploma",
    title: "Diploma — Computer Science and Engineering",
    place: "Sriram Polytechnic College, Tiruvallur",
    detail: "Score: 7.1"
  }
];

export const skillGroups = [
  {
    category: "Design",
    title: "UI / UX Design",
    items: ["Figma", "Wireframing", "Prototyping", "Responsive UI", "User Flows"]
  },
  {
    category: "Frontend",
    title: "Frontend Development",
    items: ["HTML", "CSS", "JavaScript", "Responsive Layouts"]
  },
  {
    category: "Backend",
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST APIs", "JWT / OAuth"]
  },
  {
    category: "Data",
    title: "Data & Storage",
    items: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "Programming",
    title: "Programming",
    items: ["Python"]
  },
  {
    category: "AI & Tools",
    title: "AI Tools & Workflow",
    items: ["Prompt Engineering", "GitHub Copilot", "ChatGPT", "Git"]
  }
];

export const projects = [
  {
    id: "school-website",
    title: "School Website",
    shortDescription: "A clear, responsive school website concept that helps students, parents, and staff find important information quickly.",
    description: "A school website concept focused on accessible information architecture, welcoming visual design, and straightforward navigation across key school information.",
    category: "UI / UX Design",
    year: "Concept",
    image: "/images/project-school.svg",
    architecture: "Discovery → Information Architecture → Wireframes → Responsive UI Prototype",
    highlights: [
      "Organized school information into a clear, approachable navigation structure.",
      "Explored responsive layouts for desktop and mobile experiences.",
      "Designed a clear admissions call-to-action and program discovery flow."
    ],
    technologies: ["Figma", "UI Design", "Wireframing", "Responsive Design"],
    stack: ["Figma", "UI Design", "Wireframing", "Responsive Design"],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "crm-dashboard",
    title: "CRM Dashboard",
    shortDescription: "A product dashboard concept for managing leads, tracking follow-ups, and understanding sales activity at a glance.",
    description: "A CRM dashboard concept exploring reusable interface patterns, summary metrics, lead status management, and data-dense layouts designed to remain easy to scan.",
    category: "Product Design",
    year: "Concept",
    image: "/images/project-crm.svg",
    architecture: "User Needs → Dashboard Structure → Lead Statuses → Interactive Prototype",
    highlights: [
      "Explored summary cards for key workspace metrics.",
      "Designed lead status filters and a sample lead list.",
      "Used reusable dashboard components to keep information consistent."
    ],
    technologies: ["Figma", "Wireframes", "Prototyping", "Dashboard UI"],
    stack: ["Figma", "Wireframes", "Prototyping", "Dashboard UI"],
    liveUrl: "",
    githubUrl: ""
  },
  {
    id: "ai-cooking-assistant",
    title: "AI Cooking Assistant",
    shortDescription: "A multilingual cooking assistant concept that recommends recipes and can read instructions aloud for hands-free cooking.",
    description: "An AI cooking assistant concept combining recipe suggestions, a conversational flow, and text-to-speech support to make cooking guidance easier to follow.",
    category: "AI / Python",
    year: "Concept",
    image: "/images/project-cooking.svg",
    architecture: "Recipe Query → Matching Suggestions → Step-by-Step Instructions → Optional Speech Output",
    highlights: [
      "Explored recipe search and selection for common cooking needs.",
      "Designed a conversational flow for ingredient and recipe discovery.",
      "Included optional browser speech output for hands-free listening."
    ],
    technologies: ["Python", "NLU", "gTTS", "Text-to-Speech"],
    stack: ["Python", "NLU", "gTTS", "Text-to-Speech"],
    liveUrl: "",
    githubUrl: ""
  }
];

export const experience = [
  {
    company: "Internship",
    role: "Full Stack & UI/UX Intern",
    mode: "Internship",
    period: "2026",
    bullets: [
      "Explored the overlap between product design and implementation.",
      "Planned user flows, shaped interfaces, and built web experiences."
    ]
  },
  {
    company: "Internship",
    role: "Data Science & Analytics Intern",
    mode: "Internship",
    period: "2025",
    bullets: [
      "Worked with data analysis and analytics workflows.",
      "Built experience in data-focused problem solving."
    ]
  },
  {
    company: "Internship",
    role: "Data Science & AI Intern",
    mode: "Internship",
    period: "2024",
    bullets: [
      "Explored data science and AI concepts through practical internship work."
    ]
  }
];

export const getProfile = () => profile;
export const getStats = () => stats;
export const getEducation = () => education;
export const getSkillGroups = () => skillGroups;
export const getProjects = () => projects;
export const getProjectById = (id) => projects.find((project) => project.id === id);
export const getExperience = () => experience;
