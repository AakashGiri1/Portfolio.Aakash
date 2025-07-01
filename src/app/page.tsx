'use client'

import { AnimatedBackground } from '@/components/ui/AnimatedBackground'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { TechStack } from '@/components/sections/TechStack'
import { Projects } from '@/components/sections/Projects'
import { ActualProjects } from '@/components/sections/ActualProjects'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ActualProjects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}