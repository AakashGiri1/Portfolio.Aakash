import { Project } from '../types'

export const featuredProjects: Project[] = [
  {
    id: "eve-ai",
    name: "EVE AI",
    title: "Advanced AI Assistant Platform",
    description: "Intelligent AI assistant with natural language processing capabilities",
    longDescription: "A sophisticated AI assistant platform built with cutting-edge machine learning algorithms. Features include natural language understanding, context-aware responses, and seamless integration with various APIs.",
    techStack: ["React", "TypeScript", "Node.js", "OpenAI API", "PostgreSQL"],
    tags: ["AI", "Full Stack", "Machine Learning"],
    githubUrl: "https://github.com/aakashgiri/eve-ai",
    liveUrl: "https://eve-ai-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
    outcome: "Successfully deployed AI assistant handling 1000+ daily interactions"
  },
  {
    id: "sales-retailers",
    name: "Sales Retailers",
    title: "E-commerce Management System",
    description: "Complete retail management solution with inventory tracking",
    longDescription: "Comprehensive e-commerce platform designed for retailers. Includes inventory management, order processing, customer relationship management, and detailed analytics dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    tags: ["E-commerce", "Full Stack", "Business"],
    githubUrl: "https://github.com/aakashgiri/sales-retailers",
    liveUrl: "https://sales-retailers.vercel.app",
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
    outcome: "Increased retail efficiency by 40% for participating businesses"
  },
  {
    id: "intelligent-chatbot",
    name: "Intelligent Chatbot",
    title: "Smart Customer Support Bot",
    description: "AI-powered chatbot for customer service automation",
    longDescription: "Advanced chatbot system with natural language processing capabilities. Handles customer inquiries, provides instant support, and learns from interactions to improve response quality.",
    techStack: ["Python", "TensorFlow", "React", "FastAPI", "Redis"],
    tags: ["AI", "Chatbot", "Customer Service"],
    githubUrl: "https://github.com/aakashgiri/intelligent-chatbot",
    liveUrl: "https://chatbot-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
    outcome: "Reduced customer support response time from 2 hours to 2 minutes"
  }
]