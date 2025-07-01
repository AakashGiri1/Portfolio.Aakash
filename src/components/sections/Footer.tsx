'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Heart, Code } from 'lucide-react'
import { profileData } from '@/data/profile'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: Github, href: profileData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profileData.social.linkedin, label: 'LinkedIn' },
  ]

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#actual-projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="py-12 px-4 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {profileData.name}
            </motion.h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Frontend Developer passionate about creating clean, responsive, and 
              user-focused web interfaces. Specializing in React.js, Next.js, and 
              modern web technologies.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Mail className="w-4 h-4" />
              <a 
                href={`mailto:${profileData.email}`}
                className="hover:text-blue-400 transition-colors"
              >
                {profileData.email}
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href={profileData.resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Resume
                </a>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              Let's build something amazing together!
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-400 text-sm">
              <span>© {currentYear} {profileData.name}. All rights reserved.</span>
            </div>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span>Built with</span>
              <Heart className="w-4 h-4 mx-1 text-red-400" />
              <span>using</span>
              <Code className="w-4 h-4 mx-1 text-blue-400" />
              <span>Next.js, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}