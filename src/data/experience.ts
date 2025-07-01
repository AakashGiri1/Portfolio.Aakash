import { Experience, Education } from '../types'

export const experiences: Experience[] = [
  {
    id: "freelance-frontend",
    company: "Freelance",
    position: "Frontend Developer",
    duration: "2024 - Present",
    location: "Remote",
    description: [
      "Building responsive web applications using React.js, Next.js, and modern JavaScript",
      "Creating clean, user-focused interfaces with HTML, CSS, and Tailwind CSS",
      "Collaborating with clients to translate designs into high-performance web experiences",
      "Implementing modern frontend practices including component-based architecture and responsive design"
    ],
    technologies: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git"]
  },
  {
    id: "brainwave-matrix",
    company: "Brainwave Matrix Solution",
    position: "Frontend Developer Intern",
    duration: "June 2024 - August 2024",
    location: "Remote",
    description: [
      "Developed responsive web applications using React and TypeScript",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Optimized application performance resulting in 30% faster load times",
      "Implemented modern frontend practices including code splitting and lazy loading"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "Figma"]
  },
  {
    id: "eazybytes",
    company: "EazyBytes",
    position: "Java Developer Intern",
    duration: "January 2024 - April 2024",
    location: "Hybrid",
    description: [
      "Developed backend services using Java Spring Boot framework",
      "Designed and implemented RESTful APIs for microservices architecture",
      "Worked with MySQL databases for data persistence and optimization",
      "Participated in code reviews and followed agile development practices"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Maven", "JUnit", "Git"]
  }
]

export const education: Education[] = [
  {
    id: "global-institute",
    institution: "Global Institute of IT",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2022 - 2025",
    location: "India",
    description: "Focused on software development, data structures, algorithms, and modern web technologies. Maintaining excellent academic performance while working on practical projects."
  }
]