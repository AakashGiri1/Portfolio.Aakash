'use client'

import { motion } from 'framer-motion'
import { Code, Database, Wrench, Lightbulb, Star } from 'lucide-react'
import { Card } from '../ui/Card'
import { profileData } from '@/data/profile'
import { useInView } from 'react-intersection-observer'

export const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: profileData.skills.frontend,
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-400'
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: profileData.skills.backend,
      color: 'from-green-500 to-emerald-500',
      iconColor: 'text-green-400'
    },
    {
      title: 'Database Technologies',
      icon: Database,
      skills: profileData.skills.database,
      color: 'from-purple-500 to-pink-500',
      iconColor: 'text-purple-400'
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      skills: profileData.skills.tools,
      color: 'from-orange-500 to-red-500',
      iconColor: 'text-orange-400'
    },
    {
      title: 'Core Concepts',
      icon: Lightbulb,
      skills: profileData.skills.concepts,
      color: 'from-yellow-500 to-amber-500',
      iconColor: 'text-yellow-400'
    }
  ]

  const getSkillLevel = (skill: string) => {
    // Define skill levels based on your expertise
    const expertSkills = ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design']
    const advancedSkills = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Git', 'GitHub']
    const intermediateSkills = ['Node.js', 'Java', 'MySQL', 'Spring Boot']
    
    if (expertSkills.includes(skill)) return { level: 90, label: 'Expert' }
    if (advancedSkills.includes(skill)) return { level: 80, label: 'Advanced' }
    if (intermediateSkills.includes(skill)) return { level: 70, label: 'Intermediate' }
    return { level: 60, label: 'Familiar' }
  }

  return (
    <section id="skills" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="p-6 h-full">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.color} bg-opacity-20 flex items-center justify-center`}>
                    <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                  </div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, index) => {
                    const skillData = getSkillLevel(skill)
                    return (
                      <motion.div
                        key={skill}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium text-sm">{skill}</span>
                          <span className="text-gray-400 text-xs">{skillData.label}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skillData.level}%` } : { width: 0 }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (index * 0.05) + 0.3 }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skill Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
            <div className="text-center mb-8">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Core Strengths</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">Frontend</div>
                <p className="text-gray-300">React.js & Modern JavaScript</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Responsive</div>
                <p className="text-gray-300">Mobile-First Design</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Performance</div>
                <p className="text-gray-300">Optimized Web Applications</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}