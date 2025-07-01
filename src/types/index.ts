export interface Project {
  id: string
  name: string
  title: string
  description: string
  longDescription?: string
  techStack: string[]
  tags: string[]
  githubUrl: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
  outcome?: string
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  location: string
  description: string[]
  technologies: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  duration: string
  location: string
  description?: string
}

export interface TechStack {
  name: string
  icon: string
  category: 'frontend' | 'backend' | 'database' | 'tools'
}