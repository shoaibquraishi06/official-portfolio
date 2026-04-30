import React, { useEffect } from 'react'
import heroImg from  "../assets/heroimage.png"
import '../styles/AboutMe.css'

const AboutMe = () => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const reveals = document.querySelectorAll('#about .reveal')
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    reveals.forEach(r => observer.observe(r))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="container">
      <div className="about-top">
        <h5>About Me</h5>
        <h4>Who is <span>Shoaib Quraishi ?</span></h4>
      </div>

      <h2 className="section-title reveal">ABOUT ME</h2>

      <div className="about-main">
        <div className="about-left reveal">
          <div className="image-wrap">
            <img src={heroImg} alt="Portrait" />
          </div>
        </div>

        <div className="about-right">
          <div className="about-text reveal">
            <p>
             I’m a web developer crafting clean, accessible experiences that blend performance, aesthetics, and purpose, turning ideas into fast, scalable products with modern stacks. I obsess over details, champion UX, and iterate with data to build interfaces that feel effortless and deliver measurable real impact for users and businesses at scale.
            </p>
          </div>

          <div className="about-details">
            <div className="about-card reveal">
              <h4 id='about-det'>Projects</h4>
              <p className="stat">10+</p>
            </div>

            <div className="about-card reveal">
              <h4 id='about-det'>Experience</h4>
              <p className="stat">1 yrs</p>
            </div>

            <div className="about-card reveal">
              <h4 id='about-det'>Clients</h4>
              <p className="stat">0</p>
            </div>
    
             <button className='mobile'  id='cv-button'> CV Download</button>

          </div>
            <button  className='laptop'  id='cv-button'> CV Download</button>

        </div>
          <div className="end-line"></div>
      </div>
  
       
    </section>
  )
}

export default AboutMe
