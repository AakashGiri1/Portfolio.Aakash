'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, GraduationCap, Briefcase, Award } from 'lucide-react'
import { Card } from '../ui/Card'
import { useInView } from 'react-intersection-observer'

const experiences = [
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
    technologies: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Git"],
    type: "work"
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
    technologies: ["React", "TypeScript", "Tailwind CSS", "Git", "Figma"],
    type: "work"
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
    technologies: ["Java", "Spring Boot", "MySQL", "Maven", "JUnit", "Git"],
    type: "work"
  }
]

const education = [
  {
    id: "global-institute",
    institution: "Global Institute of IT",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "2022 - 2025",
    location: "India",
    description: "Focused on software development, data structures, algorithms, and modern web technologies. Maintaining excellent academic performance while working on practical projects.",
    type: "education"
  }
]

export const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <section id="experience" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-8">
              <Briefcase className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                >
                  <Card className="p-6 hover:border-blue-500/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{exp.position}</h4>
                        <h5 className="text-lg text-blue-400 font-semibold mb-2">{exp.company}</h5>
                      </div>
                      <div className="text-right text-sm text-gray-400 flex-shrink-0 ml-4">
                        <div className="flex items-center justify-end mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center justify-end">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 text-gray-300 mb-4">
                      {exp.description.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) + (i * 0.05) }}
                        >
                          <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                >
                  <Card className="p-6 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                        <h5 className="text-lg text-purple-400 font-semibold mb-2">{edu.institution}</h5>
                      </div>
                      <div className="text-right text-sm text-gray-400 flex-shrink-0 ml-4">
                        <div className="flex items-center justify-end mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center justify-end">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    
                    {edu.description && (
                      <p className="text-gray-300">{edu.description}</p>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Card className="p-6 mt-8 hover:border-green-500/30 transition-colors">
                <div className="flex items-center mb-4">
                  <Award className="w-5 h-5 text-green-400 mr-2" />
                  <h4 className="text-xl font-bold text-white">Key Achievements</h4>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <h5 className="text-blue-400 font-semibold mb-2">Frontend Expertise</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Built 20+ responsive web applications</li>
                      <li>• Specialized in React.js and Next.js</li>
                      <li>• Expert in modern CSS and Tailwind</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-purple-400 font-semibold mb-2">Professional Growth</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 1+ year of freelance experience</li>
                      <li>• Multiple successful internships</li>
                      <li>• Strong client collaboration skills</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}