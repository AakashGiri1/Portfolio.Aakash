'use client'

import { motion } from 'framer-motion'
import { Card } from '../ui/Card'
import { profileData } from '@/data/profile'
import { useInView } from 'react-intersection-observer'

export const TechStack = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const techCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: profileData.skills.frontend,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: profileData.skills.tools,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Concepts',
      icon: '💡',
      skills: profileData.skills.concepts,
      color: 'from-green-500 to-emerald-500'
    }
  ]

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
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <Card className="p-6 h-full">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                      whileHover={{ x: 5, scale: 1.02 }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3 group-hover:scale-125 transition-transform`} />
                      <span className="text-white font-medium group-hover:text-blue-300 transition-colors">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}