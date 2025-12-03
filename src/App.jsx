import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { trackVisitor } from './utils/visitorTracker'

export default function App() {
  useEffect(() => {
    // Track visitor when app loads
    trackVisitor();
  }, []);

  return (
    <>
      <Header />
      <div>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Certifications />
        <Projects />
        <Contact />
      </div>
    </>
  )
}