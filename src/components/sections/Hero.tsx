'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, ExternalLink, Github, Linkedin, MapPin, Mail, Phone } from 'lucide-react'
import { Button } from '../ui/Button'
import { profileData } from '@/data/profile'

export const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Centered Content */}
        <motion.div
          className="text-white text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Greeting */}
          <motion.p 
            className="text-lg md:text-xl text-blue-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hello, I'm
          </motion.p>
          
          {/* Name with gradient */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            {profileData.name}
          </motion.h1>
          
          {/* Title */}
          <motion.h2 
            className="text-2xl md:text-4xl lg:text-5xl mb-8 text-blue-100 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {profileData.title}
          </motion.h2>
          
          {/* Bio */}
          <motion.p 
            className="text-lg md:text-xl mb-10 text-gray-300 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {profileData.bio}
          </motion.p>

          {/* Contact Info */}
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mb-10 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-400" />
              <span>{profileData.location}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-purple-400" />
              <a href={`mailto:${profileData.email}`} className="hover:text-blue-400 transition-colors">
                {profileData.email}
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-pink-400" />
              <a href={`tel:${profileData.phone}`} className="hover:text-blue-400 transition-colors">
                {profileData.phone}
              </a>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button
              href={profileData.resumeUrl}
              target="_blank"
              size="lg"
              className="group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              View Resume
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              Get In Touch
              <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <motion.a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-7 h-7" />
            </motion.a>
            <motion.a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-7 h-7" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
      >
        <ChevronDown className="w-8 h-8 text-white/70 hover:text-white transition-colors" />
      </motion.div>
    </section>
  )
}