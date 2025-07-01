'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  target,
  type = 'button',
  disabled = false
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring-blue-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-slate-800/80 text-white hover:bg-slate-700/80 focus:ring-slate-500 backdrop-blur-sm border border-slate-700',
    outline: 'border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 focus:ring-blue-500 backdrop-blur-sm',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10 focus:ring-gray-500'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const classes = cn(baseClasses, variants[variant], sizes[size], className)

  const MotionComponent = motion.button
  const MotionLink = motion.a

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02, y: -1 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.2 }
  }

  if (href) {
    return (
      <MotionLink
        href={href}
        target={target}
        className={classes}
        {...motionProps}
      >
        {children}
      </MotionLink>
    )
  }

  return (
    <MotionComponent
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...motionProps}
    >
      {children}
    </MotionComponent>
  )
}