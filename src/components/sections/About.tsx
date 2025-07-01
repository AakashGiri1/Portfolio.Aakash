'use client'

import { motion } from 'framer-motion'
import { Target, Lightbulb, Award, BookOpen } from 'lucide-react'
import { Card } from '../ui/Card'
import { profileData } from '@/data/profile'
import { useInView } from 'react-intersection-observer'

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const highlights = [
    {
      icon: Award,
      title: "Professional Experience",
      description: "Frontend development with focus on React.js and modern web technologies",
      color: "text-blue-400"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Currently pursuing BCA while gaining hands-on industry experience",
      color: "text-purple-400"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Committed to delivering high-quality, user-focused web solutions",
      color: "text-green-400"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Passionate about exploring new technologies and best practices",
      color: "text-yellow-400"
    }
  ]

  return (
    <section id="about" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and innovative design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Professional Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-400" />
                Professional Summary
              </h3>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>{profileData.summary}</p>
                <p>
                  My expertise spans across modern frontend technologies, with a particular focus on 
                  React.js ecosystem and responsive web design. I believe in writing clean, maintainable 
                  code and creating user interfaces that are both beautiful and functional.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Career Objectives */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-purple-400" />
                Career Objectives
              </h3>
              <ul className="space-y-4">
                {profileData.objectives.map((objective, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    {objective}
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Key Highlights
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
              >
                <Card className="p-6 text-center hover:border-white/20 transition-colors h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center`}>
                    <highlight.icon className={`w-8 h-8 ${highlight.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Personal Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <Card className="p-8 text-center bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
            <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">My Philosophy</h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              "Great web development is not just about writing code—it's about understanding user needs, 
              solving real problems, and creating digital experiences that make a positive impact. 
              Every line of code should serve a purpose, and every interface should tell a story."
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}