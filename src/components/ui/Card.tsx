'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export const Card = ({ 
  children, 
  className = '', 
  hover = true,
  delay = 0
}: CardProps) => {
  return (
    <motion.div
      className={cn(
        'backdrop-blur-glass rounded-xl shadow-2xl border border-white/10',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      } : {}}
    >
      {children}
    </motion.div>
  )
}