import React, { useEffect } from 'react'
import heroImg from  "../assets/heroimage.png"
// import { useNavigate } from 'react-router-dom'
import '../styles/AboutMe.css'

const AboutMe = () => {
  useEffect(() => {
  
// const Navigate = useNavigate()
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
            <img  loading="lazy" src={heroImg} alt="Portrait" />
          </div>
        </div>

        <div className="about-right">
          <div className="about-text reveal">
            <p>
           "I'm a Full-Stack Web Developer who helps startups and small businesses build fast, clean, and conversion-focused websites. I don't just write code — I solve business problems through technology. Whether you need a landing page, a full web app, or an e-commerce store, I deliver results on time, every time."
            </p>
          </div>

          <div className="about-details">
            <div className="about-card reveal">
              <h4 id='about-det'>Projects</h4>
              <p className="stat">10+</p>
            </div>

            <div className="about-card reveal">
              <h4 id='about-det'>On-time Delivery</h4>
              <p className="stat">100%</p>
            </div>

            <div className="about-card reveal">
              <h4 id='about-det'>Satisfaction</h4>
              <p className="stat">100%</p>
            </div>
    
             <button className='mobile'  id='cv-button'> <a href="https://wa.me/qr/EXDPSY577V5AO1" className="social-cta" aria-label="whatapp"><span>  Let's talk together  </span> </a></button>

          </div>
            <button  className='laptop'  id='cv-button'>
              <a href="https://wa.me/qr/EXDPSY577V5AO1" className="social-cta" aria-label="whatapp"><span>  Let's talk together  </span> </a></button>

        </div>
          <div className="end-line"></div>
      </div>
  
       
    </section>
  )
}

export default AboutMe
