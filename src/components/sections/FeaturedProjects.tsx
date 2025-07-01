'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Calendar } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { useInView } from 'react-intersection-observer'

const featuredProjects = [
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio built with Next.js and Framer Motion",
    longDescription: "A comprehensive portfolio website showcasing my skills and projects. Built with Next.js for optimal performance, featuring smooth animations with Framer Motion, and responsive design with Tailwind CSS.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tags: ["Portfolio", "Frontend", "Responsive"],
    githubUrl: "https://github.com/AakashGiri1/portfolio-website",
    liveUrl: "https://aakashgiri.dev",
    imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
    outcome: "Showcasing professional work and attracting potential clients"
  },
  {
    id: "task-manager",
    title: "Task Management App",
    description: "Full-featured task management application with real-time updates",
    longDescription: "A comprehensive task management solution with features like project organization, deadline tracking, team collaboration, and real-time notifications. Built with modern React patterns and responsive design.",
    techStack: ["React", "JavaScript", "CSS3", "Local Storage"],
    tags: ["Productivity", "Frontend", "SPA"],
    githubUrl: "https://github.com/AakashGiri1/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
    outcome: "Improved personal productivity and demonstrated full-stack capabilities"
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts",
    longDescription: "An intuitive weather dashboard that provides current conditions, 7-day forecasts, and weather maps. Features location detection, search functionality, and beautiful weather animations.",
    techStack: ["React", "JavaScript", "Weather API", "CSS3"],
    tags: ["API Integration", "Frontend", "Responsive"],
    githubUrl: "https://github.com/AakashGiri1/weather-dashboard",
    liveUrl: "https://weather-dash-demo.vercel.app",
    imageUrl: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
    outcome: "Demonstrated API integration skills and responsive design expertise"
  }
]

export const FeaturedProjects = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section className="py-20 px-4" ref={ref}>
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
            Highlighting my most impactful and innovative projects
          </p>
        </motion.div>

        <div className="space-y-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group">
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative h-64 lg:h-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                      {project.longDescription}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-400" />
                        Tech Stack:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {project.outcome && (
                      <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                        <p className="text-green-300 font-medium flex items-start">
                          <Calendar className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                          <span>
                            <span className="text-green-400">Impact:</span> {project.outcome}
                          </span>
                        </p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-4">
                      {project.liveUrl && (
                        <Button href={project.liveUrl} target="_blank" className="group/btn">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                          Live Demo
                        </Button>
                      )}
                      <Button
                        variant="outline"
                        href={project.githubUrl}
                        target="_blank"
                        className="group/btn"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}