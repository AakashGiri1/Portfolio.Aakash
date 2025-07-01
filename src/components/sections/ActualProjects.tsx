'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Star, GitFork, Calendar, Filter, Loader2, AlertCircle } from 'lucide-react'
import { Card } from '../ui/Card'
import { Button } from '../ui/Button'
import { fetchGitHubRepos, GitHubRepo, getLanguageColor, getTimeAgo } from '@/lib/github'
import { useInView } from 'react-intersection-observer'

export const ActualProjects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [filteredRepos, setFilteredRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all')
  const [availableLanguages, setAvailableLanguages] = useState<string[]>([])
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true)
        setError(null)
        const repoData = await fetchGitHubRepos()
        setRepos(repoData)
        setFilteredRepos(repoData)
        
        // Extract unique languages
        const languages = Array.from(
          new Set(repoData.map(repo => repo.language).filter(Boolean))
        ).sort()
        setAvailableLanguages(languages)
      } catch (err) {
        console.error('Error loading repos:', err)
        setError('Failed to load projects. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    
    loadRepos()
  }, [])

  useEffect(() => {
    if (selectedLanguage === 'all') {
      setFilteredRepos(repos)
    } else {
      setFilteredRepos(repos.filter(repo => repo.language === selectedLanguage))
    }
  }, [selectedLanguage, repos])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  if (loading) {
    return (
      <section id="actual-projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Actual Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
          
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
            <p className="text-lg text-gray-300">Loading projects from GitHub...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="actual-projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Actual Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>
          
          <div className="flex flex-col items-center justify-center py-20">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <p className="text-lg text-red-300 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="actual-projects" className="py-20 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Actual Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real projects from my GitHub repository, showcasing my development journey and technical skills
          </p>
        </motion.div>

        {/* Language Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <Button
            variant={selectedLanguage === 'all' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setSelectedLanguage('all')}
            className="flex items-center"
          >
            <Filter className="w-4 h-4 mr-2" />
            All ({repos.length})
          </Button>
          {availableLanguages.map(language => {
            const count = repos.filter(repo => repo.language === language).length
            return (
              <Button
                key={language}
                variant={selectedLanguage === language ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setSelectedLanguage(language)}
                className="flex items-center"
              >
                <div 
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: getLanguageColor(language) }}
                />
                {language} ({count})
              </Button>
            )
          })}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredRepos.length === 0 ? (
            <motion.div
              key="no-projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-gray-400 py-12"
            >
              <p className="text-lg">No projects found for the selected language.</p>
            </motion.div>
          ) : (
            <motion.div
              key="projects-grid"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredRepos.map((repo, index) => (
                <motion.div
                  key={repo.id}
                  variants={itemVariants}
                  layout
                >
                  <Card className="p-6 h-full flex flex-col group hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 flex-1">
                        {repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </h3>
                      <div className="flex items-center space-x-2 text-gray-400 flex-shrink-0 ml-2">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{repo.stargazers_count}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 flex-grow line-clamp-3">
                      {repo.description || 'No description available'}
                    </p>
                    
                    <div className="space-y-4">
                      {/* Language and Topics */}
                      <div className="flex flex-wrap gap-2">
                        {repo.language && (
                          <span 
                            className="px-3 py-1 rounded-full text-xs font-medium flex items-center border"
                            style={{ 
                              backgroundColor: `${getLanguageColor(repo.language)}15`,
                              color: getLanguageColor(repo.language),
                              borderColor: `${getLanguageColor(repo.language)}40`
                            }}
                          >
                            <div 
                              className="w-2 h-2 rounded-full mr-2"
                              style={{ backgroundColor: getLanguageColor(repo.language) }}
                            />
                            {repo.language}
                          </span>
                        )}
                        {repo.topics.slice(0, 2).map(topic => (
                          <span
                            key={topic}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs border border-purple-500/30"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                      
                      {/* Stats and Date */}
                      <div className="flex items-center justify-between text-gray-400 text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <GitFork className="w-4 h-4 mr-1" />
                            {repo.forks_count}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {getTimeAgo(repo.updated_at)}
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex space-x-2 pt-2">
                        {repo.homepage && (
                          <Button
                            size="sm"
                            href={repo.homepage}
                            target="_blank"
                            className="flex-1 group/btn"
                          >
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                            Live
                          </Button>
                        )}
                        <Button
                          variant="outline"
                          size="sm"
                          href={repo.html_url}
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
          )}
        </AnimatePresence>

        {/* GitHub Profile Link */}
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