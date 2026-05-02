import React, { useEffect } from 'react'
import Home from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import ContactMe from "../components/ContactMe";
import Pricing from '../components/Pricing.jsx'
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';

const idMap = {
  '/': 'home',
  '/about': 'about',
  '/projects': 'projects',
  '/skills': 'skills',
  '/pricing': 'pricing',
  '/contact': 'contact'
}

const Mainroutes = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const id = idMap[pathname] || 'home'
    const t = setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      else window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 50)
    return () => clearTimeout(t)
  }, [pathname])

  return (
    <main>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

       <section id="pricing">
        <Pricing />
      </section>


      <section id="contact">
        <ContactMe />
      </section>

      <Footer />
    </main>
  )
}

export default Mainroutes
