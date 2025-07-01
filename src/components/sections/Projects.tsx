'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Calendar, Code, Filter, Star } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio built with Next.js and Framer Motion",
    longDescription: "A comprehensive portfolio website showcasing my skills and projects. Built with Next.js for optimal performance, featuring smooth animations with Framer Motion, responsive design with Tailwind CSS, and dynamic GitHub integration.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub API"],
    category: "Frontend",
    tags: ["Portfolio", "Responsive", "Animation"],
    githubUrl: "https://github.com/AakashGiri1/portfolio-website",
    liveUrl: "https://aakashgiri.dev",
    imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX",
    longDescription: "Complete e-commerce platform with user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Features responsive design and optimized performance.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
    category: "Full Stack",
    tags: ["E-commerce", "Payment", "Database"],
    githubUrl: "https://github.com/AakashGiri1/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
    status: "Completed",
    year: "2024"
  },
  {
    id: "task-management",
    title: "Task Management Application",
    description: "Collaborative task management tool with real-time updates",
    longDescription: "A comprehensive task management solution with features like project organization, deadline tracking, team collaboration, real-time notifications, and progress analytics.",
    techStack: ["React", "TypeScript", "Firebase", "Material-UI"],
    category: "Frontend",
    tags: ["Productivity", "Real-time", "Collaboration"],
    githubUrl: "https://github.com/AakashGiri1/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false,
    status: "Completed",
    year: "2024"
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts",
    longDescription: "An intuitive weather dashboard providing current conditions, 7-day forecasts, weather maps, and location-based services. Features beautiful weather animations and responsive design.",
    techStack: ["React", "JavaScript", "Weather API", "Chart.js"],
    category: "Frontend",
    tags: ["API Integration", "Data Visualization", "Responsive"],
    githubUrl: "https://github.com/AakashGiri1/weather-dashboard",
    liveUrl: "https://weather-dash-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false,
    status: "Completed",
    year: "2024"
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description: "Content management system with rich text editor",
    longDescription: "A modern blog platform with rich text editing, user authentication, comment system, category management, and SEO optimization. Built with focus on performance and user experience.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    category: "Full Stack",
    tags: ["CMS", "SEO", "Authentication"],
    githubUrl: "https://github.com/AakashGiri1/blog-platform",
    liveUrl: "https://blog-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false,
    status: "In Progress",
    year: "2024"
  },
  {
    id: "chat-application",
    title: "Real-time Chat Application",
    description: "WebSocket-based chat app with multiple rooms",
    longDescription: "Real-time chat application supporting multiple chat rooms, private messaging, file sharing, emoji reactions, and user presence indicators. Built with modern web technologies.",
    techStack: ["React", "Socket.io", "Node.js", "MongoDB"],
    category: "Full Stack",
    tags: ["Real-time", "WebSocket", "Chat"],
    githubUrl: "https://github.com/AakashGiri1/chat-app",
    liveUrl: "https://chat-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: false,
    status: "Completed",
    year: "2023"
  }
]

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const categories = ['All', 'Frontend', 'Full Stack', 'Featured']

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setFilteredProjects(projects)
    } else if (category === 'Featured') {
      setFilteredProjects(projects.filter(project => project.featured))
    } else {
      setFilteredProjects(projects.filter(project => project.category === category))
    }
  }

  return (
    <section id="projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my development projects demonstrating technical skills and creative problem-solving
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'primary' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className="flex items-center"
            >
              <Filter className="w-4 h-4 mr-2" />
              {category}
              {category === 'Featured' && <Star className="w-4 h-4 ml-2" />}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <Card className="overflow-hidden group hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30 flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {project.year}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 flex-1 line-clamp-3">
                      {project.longDescription}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Code className="w-4 h-4 mr-2 text-purple-400" />
                        <span className="text-sm font-medium text-white">Tech Stack:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 3).map(tech => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs border border-gray-500/30">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          href={project.liveUrl}
                          target="_blank"
                          className="flex-1 group/btn"
                        >
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                          Live Demo
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        size="sm"
                        href={project.githubUrl}
                        target="_blank"
                        className="flex-1 group/btn"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button
            href="https://github.com/AakashGiri1"
            target="_blank"
            size="lg"
            className="group"
          >
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}