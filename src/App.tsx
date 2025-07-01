import React from 'react'
import { Navigation } from './components/Navigation'
import { AnimatedBackground } from './components/ui/AnimatedBackground'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { TechStack } from './components/sections/TechStack'
import { FeaturedProjects } from './components/sections/FeaturedProjects'
import { ActualProjects } from './components/sections/ActualProjects'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <TechStack />
        <FeaturedProjects />
        <ActualProjects />
        <Experience />
        <Contact />
      </main>
      
      <Footer />
    </div>
  )
}

export default App